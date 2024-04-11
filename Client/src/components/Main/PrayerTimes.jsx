import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import userContext from '../../UserContext';
import { Link } from 'react-router-dom';
export default function PrayerTimes() {
  const [currentDate, setCurrentDate] = useState('');
  const { geolocation, setGeolocation } = useContext(userContext);
  const [prayersData, setPrayersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    // Fetch current date
    const currentDate = getCurrentDate();
    setCurrentDate(currentDate);
    console.log(currentDate);

    // Fetch user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setGeolocation({ latitude, longitude });

          // Call getPrayerTimes after geolocation is fetched
          getPrayerTimes(currentDate.split('-')[0], currentDate.split('-')[1], latitude, longitude);
        },
        error => {
          console.error('Error getting geolocation:', error.message);
          setIsLoading(false); // Set loading state to false on error
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setIsLoading(false); // Set loading state to false if geolocation is not supported
    }
  }, []);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const getPrayerTimes = async (year, month, latitude, longitude) => {
    try {
      const response = await axios.get(`http://api.aladhan.com/v1/calendar/${year}/${month}`, {
        params: {
          latitude,
          longitude,
          method: 2,
        },
      });
      setPrayersData(response.data.data);
      console.log(response.data.data);
      setIsLoading(false); // Set loading state to false after fetching data
    } catch (error) {
      console.error('Error fetching prayer times:', error);
      setIsLoading(false); // Set loading state to false on error
    }
  };

  return (
    <>
      <div className="container">
      <Link to='/' className=' links2'  >Back</Link>
        <div className="prayerTimesContainer">
          {isLoading ? ( // Render loading message if isLoading is true
            <div>Loading...</div>
          ) : (
            prayersData.length > 0 && (
              <div>
                <h2>{currentDate}</h2>
                <ul>
                  {Object.entries(prayersData[0].timings).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: '10px', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                      <span style={{ fontWeight: 'bold' }}>{key}:</span> {value}
                    </div>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
