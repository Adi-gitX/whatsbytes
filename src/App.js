import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { Main } from './components/Main/Main';
import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;