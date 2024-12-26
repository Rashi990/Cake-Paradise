import React from "react";
import { FaSearch } from "react-icons/fa"; 
import { FaShoppingCart } from 'react-icons/fa';

function Search() {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{
        width: "100%",
        position: "absolute",
        maxWidth:"98%" 
      }}
    >
      {/* Center the search bar */}
      <div
        className="input-group"
        style={{
          maxWidth: "800px", 
          width: "90%", 
          margin: "0 auto",  
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Align buttons to the right */}
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary mx-2 btn-sm">Login</button>
        <button className="btn btn-secondary mx-2 btn-sm">Signup</button>
        <a 
          href="#" 
          className="mx-2" 
          style={{ 
            fontSize: "1.5rem", 
            cursor: "pointer", 
            textDecoration: "none", 
            color: "#6c757d",
          }}
        >
          <FaShoppingCart style={{ color: "#6c757d" }} /> 
        </a>
      </div>
    </div>
  );
}

export default Search;
