const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path'); 

mongoose.connect("mongodb+srv://client.vmmnz8s.mongodb.net/myNewDB", {
useNewUrlParser: true,
useUnifiedTopology: true
});

const contactSchema = {
email: String,
query: String,
};

const Contact = mongoose.model("contacts", contactSchema);

const app = express();

app.set('views', path.join(__dirname, 'views')); 

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, "public")));

app.get("/contact", function(req, res){
	res.render("contact");
});

app.post("/contact", function (req, res) {
	console.log(req.body.email);
const contact = new Contact({
	email: req.body.email,
	query: req.body.query,
});
contact.save(function (err) {
	if (err) {
		throw err;
	} else {
		res.render("contact");
	}
});
});

app.listen(3000, function(){
	console.log("App is running on Port 3000");
});