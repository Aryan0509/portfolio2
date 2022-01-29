const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { message } = require("statuses");
const strict = require("assert/strict");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb+srv://admin-aryan2:test123@cluster0.5spc0.mongodb.net/contact");
const schema = {
    email: String,
    message: String
}
const Contact = mongoose.model("Contact", schema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function (req, res) {
    if (req.body.email != "") {
        const contact = new Contact(
            {
                email: req.body.email,
                message: req.body.message
            }
        );
        contact.save();
    }

    res.redirect("/");
})
app.listen(process.env.PORT || 3000, function () {
    console.log("server started");
})