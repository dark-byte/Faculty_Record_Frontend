import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import EntranceForm from '../Components/EntranceForm';
import AdminDashboard from './AdminDashboard';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute allowedRoles={['admin', 'naive']}><EntranceForm /></ProtectedRoute>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
        </Routes>
    </Router>
  );
}

export default App;
