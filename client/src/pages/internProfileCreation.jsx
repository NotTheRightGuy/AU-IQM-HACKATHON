import React, { Component } from "react";
import "../styles/interProfileCreation.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

function InternProfileCreation() {
    return (
        <div className="profileCreationContainer container-fluid bg-light">
            <div className="profileWindow">
                <div className="profileCreationHeader pb-2 mt-4 mb-2 border-bottom mx-auto w-75 color-dark bg-light">
                    Update your Profile
                </div>
                <br />
                <br />
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label
                        htmlFor="skills"
                        className="fw-bold d-flex mx-5 float-start"
                    >
                        Skills
                    </label>
                    <input
                        className="form-control form-control-input"
                        type="text"
                        placeholder="Skils (Seperate Skills Using Comma)"
                        id="skills"
                    />
                    <br />
                    <label htmlFor="education" className="fw-bold ps-5">
                        Education
                    </label>
                    <input
                        className="form-control form-control-input"
                        type="text"
                        placeholder="Education"
                        id="education"
                    />
                    <br />
                    <label className="fw-bold ps-5" htmlFor="workexp">
                        Work Experience
                    </label>
                    <input
                        className="form-control form-control-input"
                        type="text"
                        placeholder="Work Experience"
                    />
                    <button
                        className="d-flex btn btn-outline-success btn-md btn-block text-align-center mx-auto mt-4"
                        type="submit"

                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = ("intern/profile");

                        }}
                    >
                        Submit Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default InternProfileCreation;
