import React from "react";
import Navbar from "react-bootstrap/Navbar";

// Stateless Functional Component
//Using Object Destructuring, we can pick out the properties we want instead of 'props' as argument.
const NavbarCounter = ({ totalCounters }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        Navbar
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarCounter;
