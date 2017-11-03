const express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send('hi there!');
});

app.get('/bye', function(req, res){
  res.send('See ya punk!');
});

app.get('/dog', function(req, res){
  res.send('MEOW!');
});







app.listen(3000, function() {
    console.log('listening on PORT 3000');
});
