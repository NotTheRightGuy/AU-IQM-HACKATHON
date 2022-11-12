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
    name: { String },
    mail: { String },
    password: { String },
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
        console.log("Failed to add user");
    }
});

app.get("api/intern/users", async (req, res) => {
    try {
        const users = await user.find();
        res.send(users);
    } catch (err) {
        console.log("Couldn't fetch users");
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
