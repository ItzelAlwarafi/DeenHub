import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import userContext from "../../UserContext"

export default function UserProfile() {
  
  const { id } = useParams();

  const {loggedInUser, setLoggedInUser } = useContext(userContext)

   console.log(loggedInUser)

 
  const [user, setUser] = useState(null);
 
  
  const [isFriend, setIsFriend] = useState(false);


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log('Error getting user:', error);
      }
    };
    getUser();

   
  }, [id]);

  const handleAddFriend = async () => {
    try {
      const response = await axios.post('http://localhost:3001/friendships', {
        user1_id: loggedInUser._id,
        user2_id: id, // The user being viewed
        status: 'pending', // Set initial status, you can adjust as needed
      });
      setIsFriend(true);
      console.log('Friendship created:', response.data.friendship);
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='user-profile'>
       <FaUserCircle className="container-i-profile-icons" />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Username: {user.user_name}</p>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.date_of_birth}</p>
      <p>Gender: {user.gender}</p>
      <button disabled={isFriend} onClick={handleAddFriend}>
        {isFriend ? 'Friend Added' : 'Add as Friend'}
      </button>
    </div>
  );
}
