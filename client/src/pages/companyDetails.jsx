// This is the user profile page for clients which shows their company name, self me, detailed info about company, skills required to apply, work experience requirenment, Stipend Range and a button to edit their profile.

import React, { Component } from "react";
import "../styles/profile.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";
import Nav from "../components/navCompany";

class Profile extends Component {
    render() {
        return (
            <>
                <Nav />
                <div className="container-fluid">
                    <div className="profileContainer">
                        <div className="profileLeft">
                            <div className="imageContainer">
                                <img
                                    className="imageClass"
                                    src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                                />
                            </div>
                            <div className="otherInformation">
                                <div className="profile-Name">
                                    Delsion J. Rouge
                                </div>
                                <div className="profileInfo">
                                    Hello, I'm a passionate Web Developer Trying
                                    my best to survive in this crazy world
                                </div>
                            </div>
                        </div>
                        <div className="profileRight">
                            <div className="generalOverView">
                                <p>Company Details.</p>
                                Hello, This is Elon Musk. I'm the CEO of Tesla
                                and SpaceX. I'm also the founder of Neuralink
                                and OpenAI. I'm also the founder of Neuralink
                                and OpenAI. I'm also the founder of Neuralink
                                and OpenAI. I'm also the founder of Neuralink
                                and Twitter. I love to code and I'm a huge fan
                                of this website. I have followed the following
                                coders on Github and suggested them to follow me
                                back. acquire OpenAI from me. I also suggest you
                                to follow them on GITHUB.
                            </div>
                            <div className="skills">
                                <p>Skills Requirenments</p>
                                Wingardium Leviosa, Lumos
                            </div>
                            <div className="workExperience">
                                <p>Experience Required</p>5 years of experience
                                in Web Development 2 years of experience in
                                Machine Learning 10 years of experience is being
                                a failure
                            </div>
                            <div className="education">
                                <p>Stipend Ranges</p>
                                From your maximum possible net worth to our
                                Github follower's net worth.
                            </div>
                        </div>
                        <button
                            className="editProfile"
                            onClick={() => {
                                window.open("/profile-creation", "_self");
                            }}
                        >
                            <img src="https://img.icons8.com/material-rounded/48/null/edit--v1.png" />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;
