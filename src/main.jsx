import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './index.css';
import Home from './components/Home';
import Roadshow from './components/Roadshow'; // Assuming you have a Roadshow component
import Prizes from './components/Prizes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadshow" element={<Roadshow />} /> 
        <Route path="/prizes" element={<Prizes />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
