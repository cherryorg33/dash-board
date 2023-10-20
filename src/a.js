import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginUi from './App';
import App from './home';

const Dashboard = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginUi />} />
          <Route path="/home" element={<App />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Dashboard;


























