import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import { useContext } from "react"
import userContext from "../../UserContext"
import axios from 'axios'; // Changed import statement for Axios
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Message() {
  const navigate = useNavigate();
  

  const { loggedInUser } = useContext(userContext);
  const [chatList, setChatList] = useState([]);





  const getChatList = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/chat/${loggedInUser._id}`);
      const chats = response.data;
  
      const updatedChats = await Promise.all(chats.map(async chat => {
        const otherMemberId = chat.members.find(memberId => memberId !== loggedInUser._id);
        const userDataResponse = await axios.get(`http://localhost:3001/users/${otherMemberId}`);
      
        const userData = userDataResponse.data; // Assuming userDataResponse.data contains user information
        return {
          ...chat,
          otherMember: userData // Add the other member's data to the chat object
        };
      }));
  
      setChatList(updatedChats);
      
    } catch (error) {
      console.log('Error getting chat list:', error);
    }
  };
  useEffect(() => {
    getChatList();
  }, [loggedInUser]); // Updated dependency array

  console.log('hello', chatList); 
  const handleClickChat = (chatId) => {
    navigate(`/chat/${chatId}`);
  };
  
 

  return (
    <div className='chat-container'>
      <div className='chat-list-container'>
        <h1> List of Chats for User </h1>
        {chatList.map((chat) => (
  <div key={chat._id}>
    <Link to={`/messages/${chat._id}`} onClick={() => handleClickChat(chat._id)}>
  <h3>{chat.otherMember.first_name} {chat.otherMember.last_name}</h3>
</Link>

  </div>
))}

      </div>
     
    </div>
  );
}
