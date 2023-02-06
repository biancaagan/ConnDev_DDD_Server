// var express = require('express');       // include express.js
// const res = require('express/lib/response');
// var server = express();         // a local instance of it

// function serverStart(){
//     console.log("Server started.");
// }

// // Start the server
// server.listen(8888, serverStart);

// // Basic route
// server.get('/conndev-sensor', (req, res) => {
//     res.send("Hello there.\n Here you will (eventually) see sensor data.\n");
// });


function fetchJSON(){
    // Make the HTTP/S call:
    fetch('/json')
        .then(response => response.json())  // conver response to JSON
        .then(data => getResponse(data))    // get he body of the response
        .catch(error => getResponse(error));    // if there is an error
}

function fetchText(){
    // Make the HTTP/S call:
    fetch('/text')
        .then(response => response.text())  // convert response to text
        .then(data => getResponse(data))    // get the body of the response
        .catch(error => getResponse(error));    // if there is an eror
}

function postJson(value){
    // Parameters for the HTTP/S call:
    let postData = {'sensor': value};
    let params = {
        method: 'POST',     // HTTP method
        headers: {      // any HTTP headers you want can go here
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(postData)
    }

    // Make the HTTP/S call:
    fetch('/data', params)
        .then(response => response.json())  // convert response to text
        .then(data => getResponse(JSON.stringify(data)))    // get the body of the response
        .catch(error => getResponse(error));    // if there is an error
}

// Function to call when you've got something to display:
function getResponse(data){
    document.getElementById('result').innerHTML = data;
}

