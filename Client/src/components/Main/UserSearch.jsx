import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import userContext from '../../UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserSearch() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(userContext); // Assuming loggedInUser contains the user's ID

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
        setFriendships(response.data);
        console.log(friendships)
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
              <div key={user._id}>
                <Link to={`/users/${user._id}`} onClick={() => showUser(user._id)}>
                  {user.user_name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='friendship-container'>
        <h3>Friendships:</h3>
        <ul>
          {friendships.map((friendship) => (
            <li key={friendship._id}>
              <Link to={`/users/${friendship.user2_id}`} onClick={() => showUser(friendship.user2_id)}>
                {friendship.user2_id} {/* Assuming you want to display the ID */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
