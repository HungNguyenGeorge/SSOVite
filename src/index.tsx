import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { Provider } from 'react-redux';
import { store } from './store';
import { msalConfig } from './authConfig';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';
// ----------------------------------------------------------------------

const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MsalProvider>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
