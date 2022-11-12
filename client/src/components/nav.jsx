import React, { Component } from "react";
import "../styles/nav.css";

class Nav extends Component {
    render() {
        return (
            <nav className="navbarProfile">
                <div className="logo"><a href="/">DevBase</a></div>
                <div className="wrapper"></div>

                <div className="navBarLinks">
                    <a href="/">Browse</a>
                </div>

            </nav>
        );
    }
}

export default Nav;
