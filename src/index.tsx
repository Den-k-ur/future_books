import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from './route';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={makeStore()}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
