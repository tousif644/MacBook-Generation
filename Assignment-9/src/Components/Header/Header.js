import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/reviews">Review</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blogs">Blogs</Link>
    </nav>
  );
};

export default Header;
