import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Academics from "./components/academics";
import AdminDashboard from "./components/adminDashboard";
import UserDashboard from "./components/userDashboard";
import Profile from "./components/profile";
import Scholarship from "./pages/Scholarship";
import Jobs from "./pages/Job";
import Users from "./pages/Users";

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
