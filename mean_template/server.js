
//  When using this template be sure to replace all prebuilt information
// with information and routing to your new project before running.


var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.json());

// Set up database connection, Schema, model++++++++++++++BE SURE TO ADJUST DB NAME!!!
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('quotes', QuoteSchema);

//This just points our server at our views which are located in folder called 'views'
app.set('views', path.join(__dirname, './views'));

app.listen(port);
console.log("Listening on 8000.")