const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    
    var height = Number(req.body.userHeight) * 0.01 
    var weight = Number(req.body.userWeight)

    var result = weight / height**2

    res.send("<h1>Your BMI is " + result);
})

app.listen(4000, function () {
    console.log("Server is running on port 3000");
})