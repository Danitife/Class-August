import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import First from './First';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './About';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
       <Route path='/' element={<App />}></Route> 
       <Route path='/first' element={<First />}></Route>
       <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <First></First> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
