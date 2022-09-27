const express = require("express");
const { isAbsolute } = require("path");
const app = express();

app.listen(3000, () => {
    console.log("App started and listening on port 3000");

});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req,res) => {
    res.sendFile(__dirname + "/contact.html")
});