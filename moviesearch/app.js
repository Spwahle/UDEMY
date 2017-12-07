var express = require('express');
var app = express();
var request = require('request');
// app.set("view engine", "ejs");


app.get('/results', function(req, res) {
    request("http://omdbapi.com/?s=ohio", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    })
});

app.listen(3000, function() {
    console.log("movie search starter server started");
});