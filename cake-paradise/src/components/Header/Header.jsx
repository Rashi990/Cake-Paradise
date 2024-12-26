import React from 'react'
import Navbar from '../Nav/Navbar'
import Search from '../Search'

function Header() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        background: "#ffe6e6",
        height:"120px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "60px",
        }}
      >
        <a className="logo-brand" href="#">
          <img src={"cake-logo.ico"} style={{ width: "60px", height: "60px" }} alt="Logo" />
        </a>
        <Search />
      </div>
      <Navbar />
    </div>
  )
}

export default Header