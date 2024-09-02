import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">
          Plastico Records
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/Ambient">
                Ambient
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Electro">
                Electro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Techno">
                Techno
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/House">
                House
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Minimal">
                Minimal
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
