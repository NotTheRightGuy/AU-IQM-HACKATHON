import React, { Component } from "react";
import "../styles/nav.css";

class Nav extends Component {
    render() {
        return (
            <nav className="navbarProfile">
                <div className="logo"><a href="/">DevBase</a></div>
                <div className="wrapper"></div>

                <div className="navBarLinks">
                    <a href="http://127.0.0.1:5500/client/src/pages/joboffer.html">Post</a>
                </div>

            </nav>
        );
    }
}

export default Nav;
