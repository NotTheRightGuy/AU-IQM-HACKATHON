import React, { Component } from "react";
import { useState } from "react";
import "../styles/internSignin.css";
import "bootstrap/dist/css/bootstrap.css";

function InternRegister() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    async function handleRegister(event) {
        event.preventDefault();
        const response = await fetch(
            "http://localhost:5000/api/intern/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mail: mail,
                    password: password,
                    name: name,
                }),
            }
        );
        const data = await response.json();
    }
    return (
        <section className="signContainer">
            <div className="signLeftWindow">
                <div className="logIn">Register</div>
                <form onSubmit={handleRegister}>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="username"
                        placeholder="Name"
                    />
                    <input
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                        type="text"
                        name="username"
                        placeholder="Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <button type="submit"

                        onClick={() => {
                            window.location.href = "/clientSignIn";
                        }}
                    >
                        Sign Up</button>
                </form>
            </div>
            <div className="signRightWindow">
                <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                />
            </div>
        </section>
    );
}

export default InternRegister;
