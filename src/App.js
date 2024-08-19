import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/AppBar';
import TableShow from './components/TableShow';
import RushingPage from './components/RushingPage';
import RecPage from './components/RecPage'
import PassPage from './components/PassPage' 
import Opening from './components/Opening';

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="/passing" element={<PassPage />} />
          <Route path="/rushing" element={<RushingPage />} />
          <Route path="/receiving" element={<RecPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
