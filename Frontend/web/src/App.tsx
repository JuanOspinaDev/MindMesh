// src/App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import Notas from './features/notes/Notas';
import HomePage from './features/home/HomePage';
import Espacios from './features/espacios/Espacios';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/Notas" element={<Notas />} />
          <Route path="/Espacios" element={<Espacios />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
