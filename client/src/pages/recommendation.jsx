import React, { Component } from "react";
import Nav from "../components/nav";
import "../styles/profile.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";
import data from "../../../databases/recruiting.json";



function Recs() {
    data.map((item) => {
        <div className="container-fluid mt-5">

            <div className="border border-secondary shadow w-75 mx-auto">
                <button className="d-inline float-end btn btn-outline-success rounded-pill mt-3 mx-5 w-25">Apply</button>
                <p className="lead ms-2 mt-2 fw-bold fs-2 ps-2">{item.company}</p>
                <hr class="dropdown-divider mx-auto" style="width: 90% ;" />
                <p className="fw-bold ps-5">Job Title</p>
                <p className="fw-bold ps-5">Skills Preferred:</p>
                <ul className="d-inline-block ms-5">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                    <li>Skill 5</li>
                </ul>
                <p class="fw-bold ps-5">Stipend Offered</p>
            </div>

        </div>
    });
}