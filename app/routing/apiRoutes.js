// need to require data folder 

var friendsArray =  require('../data/friends');

//need module export function

module.exports = function(app){

    //need get route and need to get json response 
    
    app.get('/api/friends', function (request, response){
        return response.json(friendsArray);
    });

    //need to post friends data from array with request

    app.post('/api/friends', function(request, response){

            friendsArray.push(request.body);
        });
        
    
};






