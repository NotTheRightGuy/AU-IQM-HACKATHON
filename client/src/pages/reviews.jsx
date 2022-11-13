import React, { Component } from "react";
import Nav from "../components/nav";
import "../styles/profile.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-collapse"
                        >
                            <span className="visually-hidden">
                                Toggle Navigation
                            </span>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a
                            href="http://localhost:5173/"
                            className="navbar-brand ms-5"
                        >
                            InCo
                        </a>
                        <div className="ms-auto me-4">
                            <div className="float-end d-flex ">
                                <a
                                    className="order-button btn btn-outline-light text-center fs-6"
                                    href="http://localhost:5173/profile"
                                >
                                    Account Settings
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>
                <div className="container-fluid mt-5">
                    <div className="border border-secondary shadow w-75 mx-auto">
                        <p className="lead ms-2 mt-2 fw-bold fs-2 ps-2">
                            Reviews
                        </p>
                        <hr
                            className="dropdown-divider mx-auto"
                            style="width: 90% ;"
                        ></hr>
                        <p className="fw-bold ps-5">Name</p>
                        <p className="fw-bold ps-5">Review</p>
                        <p className="lead ps-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ab exercitationem, in, nesciunt quaerat
                            reprehenderit eveniet at quia tempore sit quo
                            dignissimos. Officiis nihil similique libero
                            dignissimos quisquam, fugiat numquam blanditiis.
                            Aliquam, harum! Consectetur pariatur maxime impedit
                            minus vel qui magni!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
