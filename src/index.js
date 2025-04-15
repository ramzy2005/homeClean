import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import ProfileCreation from './pages/ProfileCreation';
import BookNow from './pages/BookNow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-creation" element={<ProfileCreation />} />
        <Route path='/We-are-cleaners' element={<BookNow />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

