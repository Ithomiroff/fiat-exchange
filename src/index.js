import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyled from "./GlobalStyled";
import {  BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import APP_THEME from "./constants/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={APP_THEME} >
      <GlobalStyled />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
