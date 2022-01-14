import React, { useEffect } from 'react';
import './App.css';
import OneSignal from 'react-onesignal';
import Location from './components/Location';
import PWAPrompt from 'react-ios-pwa-prompt';
import TestLocalbase from './components/TestLocalbase';

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL_APP_ID,
    })
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <div>
          <Location />
          <TestLocalbase />
        </div>
      </div>
      <PWAPrompt />
    </>
  );
}

export default App;
