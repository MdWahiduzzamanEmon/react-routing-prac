import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const linkStyle = {
            fontWeight: "bold",
            backgroundColor: "red",
            color:"white"
          }
    return (
      <nav style={{ marginTop: "18px" }}>
        <NavLink activeStyle={linkStyle} className="linkStyle" to="/about">
          About
        </NavLink>
        <NavLink activeStyle={linkStyle} className="linkStyle" to="/home">
          home
        </NavLink>
        <NavLink activeStyle={linkStyle} className="linkStyle" to="/friends">
          friends
        </NavLink>
      </nav>
    );
};

export default Header;