import React, { Component } from "react";
import "../styles/landingPage.css";

// The Homepage JSX
// The button in this page redirect to the sign up/sign in page depending on the user's status.
// The button is a link to the sign up/sign in page.
// The button is a link to the profile page.
//

export default class LandingPage extends Component {
    render() {
        return (
            <section className="page-1">
                <nav>
<<<<<<< Updated upstream
                    <div className="logo"><a href='#'>InCo</a></div>
=======
                    <div className="logo">
                        <a href="/">DevBase</a>
                    </div>
>>>>>>> Stashed changes
                    <div className="nav-links">
                        <a href="home">Home</a>
                        <a href="about">About</a>
                        <a href="Company">Company</a>
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
                    <div className="tagLine">ABOUT US</div>
                    <div className="subLine">
                        Students of Adani University learning to code and build
                        projects and a website useful to bridging the gap
                        between interns and companies.
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
