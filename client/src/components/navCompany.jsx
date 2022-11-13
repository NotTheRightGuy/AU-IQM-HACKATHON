import React, { Component } from "react";
import "../styles/nav.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expang-lg fixed-top navbarProfile">
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
