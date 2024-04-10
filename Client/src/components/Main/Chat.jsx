import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Chat() {
  const { chatId } = useParams(); // Get the chatId parameter from the URL
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/messages/${chatId}`);
        setMessages(response.data);
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [chatId]); // Fetch messages whenever chatId changes

  // Log messages whenever it changes
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <>
      <div className="chat-box">
        <div className="messages-box-container">
          {messages.map((message) => (
            <li key={message._id}>
              <p>{message.text}</p>
            </li>
          ))}
        </div>
        <div className="send-message-form-container">
          {/* Include your send message form here */}
        </div>
      </div>
      <h1>chat</h1>
      
    </>
  );
}
