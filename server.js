// need to require modules

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set express to a variable called app
var app = express();

//setting up a PORT 
var PORT = process.env.PORT || 8080;

// need to parse application
app.use(bodyParser.urlencoded({extended: true}));

// need to parse json
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);

require('./app/routing/apiRoutes')(app);

//port listener
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});