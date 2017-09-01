const port = 3003;

const bodyParser = require('body-parser'); //middleware to parse the body of a request to the backend
const express = require('express');

const server = express();
/**
 * Translates the request body into something the server understands
 * the request arrives on the server and the body comes in the urlencoded format
 *  extended: true -> tells that the body parser has more features than the default
 */
server.use(bodyParser.urlencoded({extended:true}));

//if the format isn't urlenconded then is json format
//then parse the body into a json object
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`backend running on port ${port}.`)
});

// server.use(function(req,res,next){
//     res.send('Funcionou');
// })


module.exports = server