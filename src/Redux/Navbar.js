import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="container" style={{ display: "flex" }}>
      <div>Redux Store</div>
      <div className="container">
        <Link to="/">Home</Link>
      </div>
      <div className="container">
        <Link to="/cart">Cart</Link>
      </div>
      <div className="container">
        <Link>Cart Items :{items.length}</Link>
      </div>
    </div>
  );
}

export default Navbar;
