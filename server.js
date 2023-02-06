const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const portNum = 8000;

// JSON data to serve as a response, and to modify
// when you get a POST request:
var myData = {
    sensor: 20
};

// Serve al the static files in the public folder:
server.use('/var/www/biancasbread.com/ConnDev_DataDashboard', express.static("public"));
// Use the body parser middleware:
server.use(bodyParser.json());

// Handler for GET /json request:
function getJson(request, response){
    response.json(myData);
}

// Handler for GET /text request:
function getText(request, response){
    let textString = "The sensor reading is " +
    myData.sensor;
    response.send(textString);
}

// Handler for POST /data request:
function postData(request, response){
    console.log("Received a post request.");
    console.log(request.body);
    // If there is a temperature value in the body of the request:
    if(request.body.sensor){
        // Update the temperature value in myData:
        myData.sensor = request.body.sensor;
    }
    response.json(myData);
}

// Server routes:
server.get("/json", getJson);
server.get("/text", getText);
server.post("/data", postData);

// Listen for requests:
const listener = server.listen(portNum, () => {
    console.log("Your app is listening on port " + portNum);
});
