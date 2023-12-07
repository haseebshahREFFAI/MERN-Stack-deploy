import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const UserDashboard = () => {
  return (
    <div>
      <div id="sidebar" className="bg-dark text-white">
        <h2>ED OP</h2>
        <ul className="list-unstyled">
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#jobs">Jobs</a>
          </li>
          <li>
            <a href="#scholarships">Scholarships</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
        </ul>
      </div>

      <div className="ml-5 p-3">
        <h2>Dashboard</h2>
        <p>Dashboard section.</p>
      </div>

      <div id="jobs" className="ml-5 p-3">
        <h2>Jobs</h2>
        <p>Jobs section.</p>
      </div>

      <div id="scholarships" className="ml-5 p-3">
        <h2>Scholarships</h2>
        <p>Scholarships section.</p>
      </div>

      <div id="profile" className="ml-5 p-3">
        <h2>Profile</h2>
        <p>Profile section.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
