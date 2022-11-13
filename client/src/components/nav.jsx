import React, { Component } from "react";
import "../styles/nav.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expang-lg fixed-top navbarProfile">
                <div
                    className="logo"
                    onClick={() => {
                        window.location.href("/");
                    }}
                >
                    InCo
                </div>
                <div className="wrapper"></div>

                <div
                    className="navBarLinks"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        window.open("/recommendation", "_self");
                    }}
                >
                    Browse
                </div>
            </nav>
        );
    }
}

export default Nav;
