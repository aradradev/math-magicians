import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <main className="mainContainer">
    <div className="navigation">
      <Link style={{ textDecoration: 'none' }} to="/">
        Math Magicians
      </Link>
      <Navbar />
    </div>
    <div className="section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </main>
);

export default App;
