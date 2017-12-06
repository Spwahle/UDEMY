var express = require('express');

var app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('home');
    res.send('<h1>welcome to the homepage</h1><h2>blah blah blah</h2>')
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', { thingVar: thing })
});


app.get('/posts', function(req, res) {
    var posts = [
        { title: 'post 1', author: 'Shaun' },
        { title: 'My Cat', author: 'Shaun' },
        { title: 'IS HAGEN', author: 'Shaun' }
    ]
    res.render("posts", { posts: posts })
})

app.listen(3000, function() {
    console.log('listening on PORT 3000');
});