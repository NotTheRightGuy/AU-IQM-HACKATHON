import React, { Component } from "react";
import "../styles/signIn.css";

export default class Sign extends Component {
    render() {
        return (
            <div className="bodyContainer">
                <div className="interns">
                    <div className="outerTag">For Interns</div>
                    <div className="innerText">
                        Join over million Interns on the quest to become the
                        best you
                    </div>
                    <button
                        className="internLogin"
                        onClick={() => {
                            window.location.href = "/internSignIn";
                        }}
                    >
                        Login
                    </button>
                    <div className="registerPrompt">Don't have an account?</div>
                    <button
                        className="internRegister"
                        onClick={() => {
                            window.location.href = "/internRegister";
                        }}
                    >
                        Register Here
                    </button>
                </div>
                <div className="company">
                    <div className="outerTag">For Company</div>
                    <div className="innerText">
                        Indentify and Hire the best which matches your
                        requirements
                    </div>
                    <button
                        className="compLogin"
                        onClick={() => {
                            window.location.href = "/clientSignIn";
                        }}
                    >
                        Login
                    </button>
                    <div className="registerPrompt">Don't have an account?</div>
                    <button
                        className="compRegister"
                        onClick={() => {
                            window.location.href = "/clientRegister";
                        }}
                    >
                        Register Here
                    </button>
                </div>
            </div>
        );
    }
}
