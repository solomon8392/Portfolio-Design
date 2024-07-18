import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './NavbarPage/NavbarPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <div className="flex bg-[#000000] text-[#FFFFFF]">
 <Navbar />
 <App />
 </div>
</BrowserRouter>,

{/* <React.StrictMode>
     <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
