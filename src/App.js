import React, { useEffect } from 'react';
import './App.css';
import OneSignal from 'react-onesignal';
import Location from './components/Location';
import PWAPrompt from 'react-ios-pwa-prompt';
import TestLocalbase from './components/TestLocalbase';
import Map from './components/Map';
import { Link, Route, Routes } from 'react-router-dom';
import Fallback from './components/Fallback';

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL_APP_ID,
    })
  }, []);

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/location">Location</Link>
        <Link to="/localbase">Localbase</Link>
        <Link to="/unknow">Test fallback</Link>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <div>
          <Routes>
            <Route path="/location" element={<Location />} />
            <Route path="/localbase" element={<TestLocalbase />} />
            <Route path="/" element={<Map />} />
            <Route path="*" element={<Fallback />} />
          </Routes>
        </div>
      </div>
      <PWAPrompt />
    </>
  );
}

export default App;
