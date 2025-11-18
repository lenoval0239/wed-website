import React from "react";

function Navigation() {
  return (
    <nav>
      <ul className="logo">
        <li>
          <a href="#">N&L</a>
        </li>
      </ul>
      <ul className="links">
        <li>
          <a href="#details"> When&Where</a>
        </li>

        <li>
          <a href="#rsvpInfo"> RSVP</a>
        </li>
        <li>
          <a href="#registry"> Registry</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
