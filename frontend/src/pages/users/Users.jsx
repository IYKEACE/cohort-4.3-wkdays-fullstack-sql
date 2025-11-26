import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>David</li>
        <li>Chidi</li>
        <li>Mubarak</li>
        <li>Aliyah</li>
        <li>Fathia</li>
      </ul>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Users;
