const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const { json } = require("express");
app.use(cors());
app.use(express.json());

app.post("/api/intern/register", (req, res) => {
    // res.send("Intern Registered");
    console.log(req.body);
    res.json({ status: "ok" });
});

app.listen(`${PORT}`, () => {
    console.log(`Listening on port ${PORT}`);
});
