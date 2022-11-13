const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

mongoose.connect(
    `mongodb://localhost:27017/intern-list`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (!err) console.log("Connected to database");
        else console.log("Couldn't connect to database");
    }
);

const userSchema = new mongoose.Schema({
    name: { String, unique: true },
    mail: { String, unique: true },
    password: { String, unique: true },
});

const user = mongoose.model("user-data", userSchema);

app.post("/api/intern/new-user", async (req, res) => {
    const newUser = new user({
        name: req.body.name,
        mail: req.body.mail,
        password: req.body.password,
    });
    try {
        await newUser.save();
        console.log("New user added");
    } catch (err) {
        console.log("User Already Exists");
    }
});

app.get("/api/intern/list", (req, res) => {
    console.log("GET request received");
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
