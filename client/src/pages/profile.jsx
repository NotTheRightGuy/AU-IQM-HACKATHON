// This is the user profile page for interns which shows their name, about me, detailed infor, skills, work experience, education, and a button to edit their profile.

import React, { Component } from "react";
import Nav from "../components/nav";
import "../styles/profile.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

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
                                <div className="profile-Name">Delsion J. Rouge</div>
                                <div className="profileInfo">
                                    Hello, I'm a passionate Web Developer Trying my
                                    best to survive in this crazy world
                                </div>
                            </div>
                        </div>
                        <div className="profileRight">
                            <div className="generalOverView">
                                <p>Know About Me.</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Consequatur, eligendi possimus suscipit
                                necessitatibus, doloremque illo impedit perferendis
                                dignissimos quam dolor atque, animi ipsa accusamus
                                corrupti dolorum earum. Inventore quos
                                necessitatibus nulla ab illo tempore optio ex
                                obcaecati. Obcaecati fugiat excepturi rem doloribus
                                accusantium ex fuga veritatis? Ex nam hic itaque
                                voluptatibus aperiam dicta nostrum possimus illum,
                                et minus accusantium cumque nesciunt debitis eaque,
                                non sed animi distinctio labore quaerat dolores
                                voluptatum? Nihil, itaque voluptatem minus numquam,
                                dolor architecto consequatur reiciendis libero
                                assumenda necessitatibus adipisci esse qui. Possimus
                                quam maiores ipsa perferendis ratione, earum
                                mollitia? Similique nulla, tempora eaque eius quasi
                                Suscipit fugit molestiae deserunt nobis non
                                voluptate.
                            </div>
                            <div className="skills">
                                <p>Skills</p>
                                Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum
                                dolor.
                            </div>
                            <div className="workExperience">
                                <p>Work Experience</p>
                                Lunga Punga
                            </div>
                            <div className="education">
                                <p>Education</p>
                                Chinga Hunga
                            </div>
                        </div>
                        <button className="editProfile">
                            <img src="https://img.icons8.com/material-rounded/48/null/edit--v1.png" />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;
