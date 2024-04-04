import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PrayerTimes() {
  const [currentDate, setCurrentDate] = useState('')
  const [geolocation, setGeolocation] = useState({ latitude: '', longitude: '' })
  const [prayersData, setPrayersData] = useState([])

  useEffect(() => {
    // Fetch current date
    const currentDate = getCurrentDate()
    setCurrentDate(currentDate)
    console.log(currentDate)
     
    // Fetch user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
          setGeolocation({ latitude, longitude })

          // Call getPrayerTimes after geolocation is fetched
          getPrayerTimes(currentDate.split('-')[0], currentDate.split('-')[1], latitude, longitude)
        },
        error => {
          console.error('Error getting geolocation:', error.message)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, []) 

  function getCurrentDate() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const getPrayerTimes = async (year, month, latitude, longitude) => {
    try {
      const response = await axios.get(`http://api.aladhan.com/v1/calendar/${year}/${month}`, {
        params: {
          latitude,
          longitude,
          method: 2
        }
      })
      setPrayersData(response.data.data)
      console.log(response.data.data);
 

    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }
  }

  return (
    <>
    
      <div className='container'>  
       
        <div className='prayerTimesContainer'>

          {prayersData.length > 0 && (
            <div>
              <h2> {currentDate}</h2>
              <ul>
                {Object.entries(prayersData[0].timings).map(([key, value]) => (
                  <div key={key}>
                    {key}: {value}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
