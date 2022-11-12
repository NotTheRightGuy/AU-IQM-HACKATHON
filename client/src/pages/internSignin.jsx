import React, { Component } from "react";
import { useState } from "react";
import "../styles/internSignin.css";
import "bootstrap/dist/css/bootstrap.css";

function InternSignIn() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/intern/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mail: mail,
                password: password,
                name: name,
            }),
        });
        const data = await response.json();
    }

    return (
        <section className="signContainer">
            <div className="signLeftWindow">
                <div className="logIn">Log In</div>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Sign In</button>
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

export default InternSignIn;
