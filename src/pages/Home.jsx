import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Title Bar */}
      <div style={{
        backgroundColor: "#2c3e50",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
      }}>

        <h2 style={{margin:0}}>Coupon Admin</h2>

        <div>
          <Link to="/" style={navStyle}>Home</Link>
          <Link to="/dashboard" style={navStyle}>Dashboard</Link>
          <Link to="/offers" style={navStyle}>Offers</Link>
        </div>

      </div>

      {/* Main Content */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Coupon & Offer Management System</h1>
        <h3>WELCOME</h3>
      </div>

    </div>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "20px",
  fontSize: "18px"
};

export default Home;