import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand fs-3" to="/">
          Plastico Records
        </Link>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/ambient">
                Ambient
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electro">
                Electro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/techno">
                Techno
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/house">
                House
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/minimal">
                Minimal
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget /> {}
      </div>
    </nav>
  );
}

export default NavBar;
