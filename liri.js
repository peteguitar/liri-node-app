var request = require('request');
var spotify = require('spotify');
var Twitter = require('twitter');
var fs = require('fs');
var keys = require('./keys.js');

var command = process.argv[2];
var argument = process.argv[3];
var output;



if (command == "my-tweets"){    
//creating a new object that allows my-tweets
var client = new Twitter({
 consumer_key: keys.consumer_key,
 consumer_secret: keys.consumer_secret,
 access_token_key: keys.access_token_key,
 access_token_secret: keys.access_token_secret
});

var params = {screen_name: 'otherworld68'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
   console.log(tweets);
 }
 if (error){
     console.log(error);
 }
 //console.log(keys.consumer_key);
});
}