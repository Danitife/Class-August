import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import First from './First';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './About';
import Navbar from './Navbar';
import Event from './Event';
import NotFound from './NotFound';
import EventAssignment from './EventAssignment';
import User from './User';
import InfoWeNeed from './StateLifting/InfoWeNeed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
       <Route path='/' element={<App />} />
       <Route path='/home' element={<Navigate to="/" />} />
       <Route path='/first' element={<First />} />
       <Route path='/assignment' element={<EventAssignment />} />
       <Route path='/about' element={<About/>} />
       <Route path='/event' element={<Event />} />
       <Route path='/users' element={<User />} />
       <Route path='/statelifting' element={<InfoWeNeed />} />
       <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* <First></First> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
