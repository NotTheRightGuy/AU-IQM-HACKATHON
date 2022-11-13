import React, { Component } from "react";
import "../styles/interProfileCreation.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

function InternProfileCreation() {
    return (
        <div className="profileCreationContainer container-fluid bg-light">
            <div className="profileWindow">
                <br />
                <br />
                <form action="">
                    <label htmlFor="skills" className="fw-bold d-flex mx-5 float-start">Skills</label>
                    <input
                        className="form-control form-control-input"
                        type="text"
                        placeholder="Skils (Seperate Skills Using Comma)"
                        id="skills"
                    />
                    <br />
                    <label htmlFor="education" className="fw-bold ps-5">Education</label>
                    <input className="form-control form-control-input" type="text" placeholder="Education" id="education"/>
                    <br />
                    <label className="fw-bold ps-5" htmlFor="workexp">Work Experience</label>
                    <input className="form-control form-control-input" type="text" placeholder="Work Experience" />
                    <button
                        className="d-flex btn btn-outline-success btn-md btn-block text-align-center mx-auto mt-4"
                        type="submit"
                        onClick={() => {
                            window.open("/intern/profile", "_self");
                        }}
                    >Submit Profile</button>
                </form>
            </div>
        </div>
    );
}

export default InternProfileCreation;
