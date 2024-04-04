import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidemenu from './components/Sidemenu'
import './App.css';

export default function App() {

  return (
    <>
    <div className='page-container'>
  
      <div className="HeaderContainer">
  <div className="Sidemenu">
    <Sidemenu />
  </div>
  <div className="HeaderContent">
    <Header />
  </div>
</div>
      <div className='Main'>
        <Main />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      </div>
    </>
  );
}
