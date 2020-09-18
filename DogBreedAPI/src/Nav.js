import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: "black",
        textDecoration: "none"
    };
    return (
        <nav>

            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>logo</li>
                </Link>
                <Link style={navStyle} to="/content">
                    <li>Content</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;