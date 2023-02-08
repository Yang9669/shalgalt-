import React from 'react'
import Home1 from './container/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Red from './components/red';
import Lime from './components/lime';
import Blue from './components/blue';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/red" element={<Red />} />
          <Route path="/lime" element={<Lime />} />
          <Route path="/blue" element={<Blue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;