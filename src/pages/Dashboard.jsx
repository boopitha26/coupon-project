import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {

  const [coupons, setCoupons] = useState([
    { id: 1, name: "WELCOME10", benefit: "10% discount" },
    { id: 2, name: "SAVE50", benefit: "₹50 off above ₹500" },
    { id: 3, name: "FREESHIP", benefit: "Free delivery" }
  ]);

  const [name,setName] = useState("");
  const [benefit,setBenefit] = useState("");

  const addCoupon = () => {
    if(name && benefit){
      setCoupons([...coupons,{id:Date.now(),name,benefit}])
      setName("")
      setBenefit("")
    }
  }

  const deleteCoupon = (id) =>{
    setCoupons(coupons.filter(c => c.id !== id))
  }

  return (
    <div>

      {/* Title Bar */}
      <div style={{
        backgroundColor:"#2c3e50",
        padding:"15px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        color:"white"
      }}>
        <h2 style={{margin:0}}>Coupon Admin</h2>

        <div>
          <Link to="/" style={nav}>Home</Link>
          <Link to="/dashboard" style={nav}>Dashboard</Link>
          <Link to="/offers" style={nav}>Offers</Link>
        </div>
      </div>

      <div style={{padding:"20px"}}>

      <h2>Admin Dashboard</h2>

      <div className="cards">

        <div className="card">
          <h3>Total Coupons</h3>
          <p>{coupons.length}</p>
        </div>

        <div className="card">
          <h3>Active Offers</h3>
          <p>{coupons.length}</p>
        </div>

        <div className="card">
          <h3>Status</h3>
          <p>Running</p>
        </div>

      </div>

      <div className="form">
        <input
        placeholder="Coupon Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        placeholder="Benefit"
        value={benefit}
        onChange={(e)=>setBenefit(e.target.value)}
        />

        <button onClick={addCoupon}>Add Coupon</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Coupon</th>
            <th>Benefit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {coupons.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.benefit}</td>
              <td>
                <button
                className="delete"
                onClick={()=>deleteCoupon(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      </div>

    </div>
  );
}

const nav = {
  color:"white",
  textDecoration:"none",
  marginLeft:"20px",
  fontSize:"18px"
};

export default Dashboard;