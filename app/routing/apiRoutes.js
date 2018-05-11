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
            
 //logic
            // get a new user
            // get the array of friends
            // create array to hold differences: diffArray

            // iterate over the friends array
            //  -> calculate the difference of scores between current friend and user and put in an array
                    // -> iterate over score array of user and compare to score array of friend
                    //  -> subtract user score from friend score, push result into an array
                // -> Add all values together from resulting array, store the sum in diffArray
            // after loop, find the index of lowest value in the diffArray
            // send back friend object located at that object


            
    


           