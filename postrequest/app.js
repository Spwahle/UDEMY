var express = require("express");
var app = express();
var bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var friends = ["tony", "justin", "jeanette", "kelly", "holly"];


app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend)
    res.redirect("/friends")
})

app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.listen(3000, function() {
    console.log("server started");
});