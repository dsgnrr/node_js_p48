import React from 'react';
import ReactDOM from 'react-dom/client';
import AppFirst from './app-first.js'
import TailwindPage from './tailwind-intro.js';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';


const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      {/* <TailwindPage/> */}
    </BrowserRouter>
  </React.StrictMode>,
)
