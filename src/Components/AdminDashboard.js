// AdminDashboard.jsx

import React from 'react';
import '../Assert/Css/Dashboard.css'

function AdminDashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      {/* <div className="main-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Here you can manage users, settings, and more.</p>
      </div> */}
    </div>
  );
}

export default AdminDashboard;
