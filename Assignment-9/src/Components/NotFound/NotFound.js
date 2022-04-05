import React from "react";
import logo from "../../404.svg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Page Not Found 🚫</h1>
      <div className="not-found-container">
        <br />
        <img src={logo} alt="" width={550} />
      </div>
    </div>
  );
};

export default NotFound;
