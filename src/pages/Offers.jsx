import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Offers() {

  const [search, setSearch] = useState("");
  const [timeLeft, setTimeLeft] = useState({});

  const coupons = [
    { id: 1, icon: "🏷️", code: "WELCOME10", discount: "10% OFF", expiry: "2026-12-31" },
    { id: 2, icon: "💰", code: "SAVE50", discount: "₹50 OFF above ₹500", expiry: "2026-10-10" },
    { id: 3, icon: "🚚", code: "FREESHIP", discount: "Free Delivery", expiry: "2026-09-01" }
  ];

  const offers = [
    { id: 4, icon: "🎉", name: "Festival Sale", discount: "20% OFF", expiry: "2026-12-31" },
    { id: 5, icon: "🛍️", name: "Weekend Offer", discount: "15% OFF", expiry: "2026-10-10" },
    { id: 6, icon: "👤", name: "New User Offer", discount: "10% OFF", expiry: "2026-09-01" }
  ];

  const allItems = [...coupons, ...offers];

  useEffect(() => {

    const timer = setInterval(() => {

      const updated = {};

      allItems.forEach((item) => {

        const diff = new Date(item.expiry) - new Date();

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          updated[item.id] = days + " days left";
        } else {
          updated[item.id] = "Expired";
        }

      });

      setTimeLeft(updated);

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const filteredCoupons = coupons.filter((c) =>
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  const filteredOffers = offers.filter((o) =>
    o.name.toLowerCase().includes(search.toLowerCase())
  );

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

      <div className="offers">

      <h2>Discount Coupons & Promotional Offers</h2>

      <input
        className="search"
        type="text"
        placeholder="Search coupons or offers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Discount Coupons</h3>

      <div className="offer-grid">

        {filteredCoupons.map((coupon) => (
          <div className="offer-card" key={coupon.id}>
            <div className="icon">{coupon.icon}</div>
            <h3>{coupon.code}</h3>
            <div className="discount">{coupon.discount}</div>
            <p className="expiry">{timeLeft[coupon.id]}</p>
          </div>
        ))}

      </div>

      <h3>Promotional Offers</h3>

      <div className="offer-grid">

        {filteredOffers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <div className="icon">{offer.icon}</div>
            <h3>{offer.name}</h3>
            <div className="discount">{offer.discount}</div>
            <p className="expiry">{timeLeft[offer.id]}</p>
          </div>
        ))}

      </div>

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

export default Offers;