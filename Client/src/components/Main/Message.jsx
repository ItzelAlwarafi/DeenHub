import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import userContext from '../../UserContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';

export default function Message() {
  let navigate = useNavigate();

  const showUser = (id) => {
    navigate(`/users/${id}`);
  };

  const { user, setUser } = useContext(userContext);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/messages/:senderId/:receiverId');
      if (Array.isArray(response.data)) {
        setMessages(response.data);
      } else {
        console.error('Invalid data format for messages:', response.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/messages', {
        senderId: 'senderUserId',
        receiverId: 'receiverUserId',
        content,
      });
      setContent('');
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

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
                {/* Use Link component for navigation */}
                <Link to={`/users/${user._id}`} onClick={() => showUser(user._id)}>
                  {user.user_name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <h1>Messages</h1>
      <div className='message-container'>
        {Array.isArray(messages) &&
          messages.map((message) => (
            <div className='messageBox' key={message._id}>
              <p>{message.content}</p>
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className='message-input'
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}