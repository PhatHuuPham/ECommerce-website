import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { User } from "../../screens/admin/User";
import { Dashboard } from "../../screens/admin/Dashboard";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
