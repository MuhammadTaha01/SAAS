import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider


const root = createRoot(document.getElementById('root'));

root.render(
  <>
  <GoogleOAuthProvider clientId='531585026176-05fg5kipt9tk6hrr11pfc9qp9kv5m9bb.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
  </>
);