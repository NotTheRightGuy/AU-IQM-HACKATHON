import React, { Component } from "react";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

function JobCards({ data }) {
    const { position, company, skills, stipend } = data;
    const { one, two, three } = skills;
    return (
        <div className="container-fluid mt-5">
            <div className="border border-secondary shadow w-75 mx-auto">
                <button className="d-inline float-end btn btn-outline-success rounded-pill mt-3 mx-5 w-25">
                    Apply
                </button>
                <p className="lead ms-2 mt-2 fw-bold fs-2 ps-2">{company}</p>
                <hr
                    className="dropdown-divider mx-auto"
                    style={{ width: "90%" }}
                />
                <p className="fw-bold ps-5">{position}</p>
                <p className="fw-bold ps-5">Skills Preferred:</p>
                <ul className="d-inline-block ms-5">
                    <li>{one}</li>
                    <li>{two}</li>
                    <li>{three}</li>
                </ul>
                <p className="fw-bold ps-5">{stipend}</p>
            </div>
        </div>
    );
}

export default JobCards;
