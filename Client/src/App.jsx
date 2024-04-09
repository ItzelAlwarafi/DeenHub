import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidemenu from './components/Sidemenu';
import LogIn from './components/Main/LogIn';
import UserContext from './UserContext';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [geolocation, setGeolocation] = useState({ latitude: '', longitude: '' })
  return (
    <div className="App">
      <UserContext.Provider value={{ loggedIn, setLoggedIn,loggedInUser, setLoggedInUser,geolocation, setGeolocation }}>
        {loggedIn ? (
          <>
            <div className="page-container">
              <div className="HeaderContainer">
                <div className="Sidemenu">
                  <Sidemenu />
                </div>
                <div className="HeaderContent">
                  <Header />
                </div>
              </div>
              <div className="Main">
                <Main />
              </div>
              <div className="footer">
                <Footer />
              </div>
            </div>
          </>
        ) : (
          <LogIn />
        )}
      </UserContext.Provider>
    </div>
  );
}
