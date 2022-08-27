import React from "react";
import { Link } from "react-router-dom";
import AddContactForm from "./AddContactForm";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Contact Apps
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                All Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Family" className="nav-link">
                Family
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Friend" className="nav-link">
                Friend
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Work" className="nav-link">
                Work
              </Link>
            </li>
          </ul>
          <AddContactForm />
        </div>
      </div>
    </nav>
  );
}
