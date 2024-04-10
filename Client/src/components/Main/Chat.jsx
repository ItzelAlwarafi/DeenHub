import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import userContext from '../../UserContext';
import { useContext } from "react"
export default function Chat() {
    const { loggedInUser } = useContext(userContext);
    const [messageText, setMessageText] = useState('');
  const { chatId } = useParams();
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
  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3001/message', {
        chatId,
        senderId: loggedInUser._id,
        text: messageText,
      });

      console.log('Message sent successfully:', response.data);

      // Update the messages state to display the sent message
      setMessages([...messages, response.data]);

      // Clear the message input after sending
      setMessageText('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  const formatHour = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
    return `${hours}:${formatMinutes(date)} ${ampm}`;
  };
  
  // Function to format minutes with leading zero if necessary
  const formatMinutes = (date) => {
    let minutes = date.getMinutes();
    return minutes < 10 ? `0${minutes}` : minutes;
  };
  return (
    <>
      <div className="chat-box">
        <div className="messages-box-container">
          {messages.map((message) => (
            <div className='message-box' key={message._id}>
              <h1 className='message-text'>{message.text}</h1>
              <p>{formatHour(message.timestamp)}</p> 
            </div>
          ))}
        </div>
        <div className="send-message-form-container">
        <input
          type="text"
          value={messageText}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>

    </>
  );
}
