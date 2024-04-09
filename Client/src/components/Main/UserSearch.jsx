import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import userContext from '../../UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
export default function UserSearch() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(userContext);

  const showUser = (id) => {
    navigate(`/users/${id}`);
  };

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [friendships, setFriendships] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.log('Error getting users', error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.user_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  useEffect(() => {
    const getFriendships = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/friendships/id/${loggedInUser._id}`);
        setFriendships(Array.isArray(response.data.friendships) ? response.data.friendships : []);
      } catch (error) {
        console.log('Error getting friendships', error);
      }
    };
    getFriendships();
  }, [loggedInUser.id]);
  
  return (
    <div className='chat-container'>
      <div className='add-friend-container'>
        <label htmlFor='searchInput'>Search User:</label>
        <input
          className='search-input'
          type='text'
          id='searchInput'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for a user...'
        />
        {searchTerm !== '' && (
          <div className='search-results'>
            {filteredUsers.map((user) => (
              <div className='search-results-box' key={user._id}>
                <Link to={`/users/${user._id}`} style={{ textDecoration: 'none' }} onClick={() => showUser(user._id)}>
                    <div className='card-friend-search'>
                <FaUserCircle className="friend-i-icons-card" /> <h3 className='search-results-box-name' >   {user.user_name} </h3>
                </div>
                </Link>
                
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='friendship-container'>
        <h3>Friends:</h3>
        <div className='friend-container'>
          {Array.isArray(friendships) && friendships.map((friendship) => (
            <div className='friend-card' key={friendship._id}>
              <Link to={`/users/${friendship.user2_id._id}`} style={{ textDecoration: 'none' }} onClick={() => showUser(friendship.user2_id._id)}>
              <FaUserCircle className="friend-i-icons" />
                <h2 className='friend-name' > {friendship.user2_id.user_name}</h2>
              </Link>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
