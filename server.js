const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const portNum = 8888;

// JSON data to serve as a response, and to modify
// when you get a POST request:
var myData = {
    sensor: 20
};

// Serve alL the static files in the public folder:
server.use('/conndev-sensor/', express.static("public"));
// Use the body parser middleware:
server.use(bodyParser.json());

// Handler for GET /json request:
function getJson(req, res){
    res.json(myData);
}

// Handler for GET /text request:
function getText(req, res){
    let textString = "The sensor reading is " +
    myData.sensor;
    res.send(textString);
}

// Handler for POST /data request:
function postData(req, res){
    console.log("Received a post request.");
    console.log(req.body);
    // If there is a temperature value in the body of the request:
    if(request.body.sensor){
        // Update the temperature value in myData:
        myData.sensor = request.body.sensor;
    }
    res.json(myData);
}

// Server routes:
// server.get('/conndev-sensor', (req, res) => {
//     res.send("Hello there. Running the script shows this text, but not the index.html file ...");
// });
server.get("/conndev-sensor/json", getJson);
server.get("/conndev-sensor/text", getText);
server.post("/conndev-sensor/data", postData);


function serverStart(){
    console.log("Server started on port " + portNum);
}

// Listen for requests:
server.listen(portNum, serverStart);


