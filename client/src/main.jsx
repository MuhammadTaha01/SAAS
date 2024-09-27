import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-2mlojserqc0ytr8b.us.auth0.com"
    clientId="VsxkTcFAJ45SsazlnuEIOMMS0nDKt8wM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);