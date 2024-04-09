import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import userContext from '../../UserContext';

export default function Message() {
    const {user,setUser} =useContext(userContext)

  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

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
        <label htmlFor='userSelect'>Select User:</label>
        <select id='userSelect' value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value=''>Select a user</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.user_name}
            </option>
          ))}
        </select>
        <button className='add-Friend' >Add as Friend </button>


      </div>
      <h1>Messages</h1>
      <div>
        {Array.isArray(messages) &&
          messages.map((message) => (
            <div className='messageBox' key={message._id}>
              <p>{message.content}</p>
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input className='message-input' type='text' value={content} onChange={(e) => setContent(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
