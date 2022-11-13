import React, { Component } from "react";
import "../styles/signIn.css";
import "../../bootstrap-5.2.2-dist/css/bootstrap.min.css";

export default class Sign extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="pb-2 mt-4 mb-2 border-bottom">
                    <h1 className="fs-1 fw-bold">
                        Failed Login.
                    </h1>
                    <p className="lead">
                        Please try Again.
                    </p>
                </div>
                {/* <hr /> */}

            </div>
        );
    }
}
