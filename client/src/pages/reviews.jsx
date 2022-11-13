import React, { Component } from "react";
import Nav from "../components/nav";
import "../styles/profile.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";
export default class LandingPage extends Component {
    render() {
        return (

            <div>
                <section>
                    <div class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse">
                            <span class="visually-hidden">Toggle Navigation</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a href="http://localhost:5173/" class="navbar-brand ms-5">DevBase</a>
                        <div class="ms-auto me-4">
                            <div class="float-end d-flex ">
                                <a class="order-button btn btn-outline-light text-center fs-6" href="http://localhost:5173/profile">Account Settings</a>
                            </div>
                        </div>
                    </div>
                </section>
                <br>
                </br>
                <div class="container-fluid mt-5">
                    <div class="border border-secondary shadow w-75 mx-auto">
                        <p class="lead ms-2 mt-2 fw-bold fs-2 ps-2">Reviews</p>
                        <hr class="dropdown-divider mx-auto" style="width: 90% ;"></hr>
                        <p class="fw-bold ps-5">Name</p>
                        <p class="fw-bold ps-5">Review</p>
                        <p class="lead ps-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem, in, nesciunt quaerat reprehenderit eveniet at quia tempore sit quo dignissimos. Officiis nihil similique libero dignissimos quisquam, fugiat numquam blanditiis. Aliquam, harum! Consectetur pariatur maxime impedit minus vel qui magni!</p>
                    </div>
                </div>

            </div>
        );
    }
}