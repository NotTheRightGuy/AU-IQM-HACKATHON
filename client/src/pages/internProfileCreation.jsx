import React, { Component } from "react";
import "../styles/interProfileCreation.css";

function InternProfileCreation() {
    return (
        <div className="profileCreationContainer">
            <div className="profileWindow">
                <div className="profileCreationHeader">Create your Profile</div>
                <input
                    type="text"
                    placeholder="Skils (Seperate Skills Using Comma)"
                />
                <br />
                <input type="text" placeholder="Education" />
                <br />
                <input type="text" placeholder="Work Experience" />
                <br />
                <button
                    type="submit"
                    onClick={() => {
                        window.open("/intern/profile", "_self");
                    }}
                >
                    Submit Profile
                </button>
            </div>
        </div>
    );
}

export default InternProfileCreation;
