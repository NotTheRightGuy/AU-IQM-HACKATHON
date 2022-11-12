import React, { Component } from "react";
import "../styles/landingPage.css";

export default class LandingPage extends Component {
    render() {
        return (
            <section className="page-1">
                <nav>
                    <div className="logo">DevBase</div>
                    <div className="nav-links">
                        <a href="home">Home</a>
                        <a href="about">About</a>
                        <a href="Company">Company</a>
                        <a href="Reviews">Reviews</a>
                        <button
                            className="start"
                            onClick={() => {
                                window.location.href = "/sign";
                            }}
                        >
                            Start Your Journey <>&#8594;</>
                        </button>
                    </div>
                </nav>
                <div className="content">
                    <div className="tagLine">
                        WHERE ANYONE CAN MEET THEIR FULL POTENTIAL
                    </div>
                    <div className="subLine">
                        Bridging the gap between interns and company
                    </div>
                    <button
                        className="btnStart"
                        onClick={() => {
                            window.location.href = "/sign";
                        }}
                    >
                        Start your Journey
                    </button>
                </div>
            </section>
        );
    }
}