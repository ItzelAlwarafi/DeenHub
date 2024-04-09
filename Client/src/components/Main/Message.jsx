import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your Socket.IO server URL

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    // Listen for 'message' event from the server
    socket.on('message', (message) => {
      // Update messages state to display the new message
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Only run this effect once on component mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the message to the server using Socket.IO
      socket.emit('sendMessage', { content });

      // Clear the input field after sending the message
      setContent('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='chat-container'>
      <h1>Messages</h1>
      <div className='message-container'>
        {messages.map((message, index) => (
          <div className='messageBox' key={index}>
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
