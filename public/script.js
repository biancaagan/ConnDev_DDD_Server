
function fetchJSON(){
    // Make the HTTP/S call:
    fetch('/conndev-sensor/json')
        .then(response => response.json())  // convert response to JSON
        .then(data => getResponse(data))    // get the body of the response
        .catch(error => getResponse(error));    // if there is an error
}

function fetchText(){
    // Make the HTTP/S call:
    fetch('/conndev-sensor/text')
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
    fetch('/conndev-sensor/data', params)
        .then(response => response.json())  // convert response to text
        .then(data => getResponse(JSON.stringify(data)))    // get the body of the response
        .catch(error => getResponse(error));    // if there is an error
}

// Function to call when you've got something to display:
function getResponse(data){
    document.getElementById('result').innerHTML = data;
}

