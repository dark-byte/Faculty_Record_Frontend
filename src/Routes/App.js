import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import EntranceForm from '../Components/EntranceForm';
import AdminDashboard from '../Components/AdminDashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<EntranceForm/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
    </Router>
  );
}

export default App;
