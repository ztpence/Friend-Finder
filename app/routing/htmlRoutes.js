// need to require path for html

var path = require('path');

// need module export function

module.exports = function(app){

// get survey route with response file path

app.get('/survey',function(request, response){
    response.sendFile(path.join(__dirname + '../../public/survey.html'));
});

app.get('/', function (request, response){
    response.sendFile(path.join(__dirname + '../../public/home.html'));
});



};



