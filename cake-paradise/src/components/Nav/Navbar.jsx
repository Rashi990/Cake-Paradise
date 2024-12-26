import React from "react";
import { FaShoppingCart } from 'react-icons/fa';


function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: "  #ffb3b3",
        height: "60px",
        width: "100%",
        borderTop: "1px solid #ddd",
      }}
    >
    <a className="navbar-brand" href="#">

    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul
        className="navbar-nav justify-content-center w-100"
        style={{ fontSize: "14px", fontWeight:"500" }}
      >
        <li className="nav-item active mx-2">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
            Shop
          </a>
        </li>
        <li className="nav-item dropdown mx-2">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </a>
          <div className="dropdown-menu" style={{ fontSize: "14px" }}>
            <a className="dropdown-item" href="#">
              Cakes
            </a>
            {/* <a className="dropdown-item" href="#">
              Cupcakes
            </a> */}
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Cupcakes
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Sweets
            </a>
          </div>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      {/* <div className="d-flex align-items-center">
          <button className="btn btn-outline-primary mx-2 btn-sm">Login</button>
          <button className="btn btn-primary mx-2 btn-sm">Signup</button>
          <a href="#" className="mx-2" style={{ fontSize: "1.5rem", cursor: "pointer", textDecoration: "none" }}>
            <FaShoppingCart />
        </a>
        </div> */}
      </div>
  </nav>
  );
}

export default Navbar;
