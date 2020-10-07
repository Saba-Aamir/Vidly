import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
// import Customers from "./customers";
// import Rentals from "./rentals";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        Vidly
      </Link>
      <Nav className="mr-auto">
        <NavLink to="/movies" className="nav-link">
          Movies
        </NavLink>
        <NavLink to="/customers" className="nav-link">
          Customers
        </NavLink>
        <NavLink to="/rentals" className="nav-link">
          Rentals
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
