import React, { Component } from "react";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

function JobCards(data) {
    return (
        <div className="container-fluid mt-5">
            <div className="border border-secondary shadow w-75 mx-auto">
                <button className="d-inline float-end btn btn-outline-success rounded-pill mt-3 mx-5 w-25">
                    Apply
                </button>
                <p className="lead ms-2 mt-2 fw-bold fs-2 ps-2">
                    {data.company}
                </p>
                <hr
                    className="dropdown-divider mx-auto"
                    style={{ width: "90%" }}
                />
                <p className="fw-bold ps-5">{data.position}</p>
                <p className="fw-bold ps-5">Skills Preferred:</p>
                <ul className="d-inline-block ms-5">
                    <li>{data.skills[0]}</li>
                    <li>{data.skills[1]}</li>
                    <li>{data.skills[2]}</li>
                </ul>
                <p className="fw-bold ps-5">{data.stipend}</p>
            </div>
        </div>
    );
}

export default JobCards;
