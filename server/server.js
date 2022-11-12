const express = require("express");
const app = express();
const PORT = 1410;

app.get("/api/login", (req, res) => {
    res.send("You are on the login page");
});

app.listen(`${PORT}`, () => {
    console.log(`Listening on port ${PORT}`);
});
