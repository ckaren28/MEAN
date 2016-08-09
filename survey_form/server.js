var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index")
});
app.post('/result', function(req, res) {
    console.log(req.body);
    res.render("result", {form:req.body})
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
