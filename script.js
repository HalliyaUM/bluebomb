
// background colour
function changeBgcolour(colour) {

    //var colour;
    /*
    if (t > 50) {
        colour = "purple";
    } else if (t > 40) {
        colour = "blue";
    } else if (t > 30) {
        colour = "green";
    } else if (t > 20) {
        colour = "yellow"; 
    } else if (t  >10) {
        colour = "orange";
    } else {
        colour = "red";
    }
    */
    document.body.style.backgroundColor = colour;
}

// time
function displayTime() {

    var time = document.getElementById("time");

    var hours = getTime("hours");
    var minutes = getTime("minutes");
    var seconds = getTime("seconds");

    var t = seconds;
    var colour = "black";
    if (t > 50) {
        colour = "purple";
    } else if (t > 40) {
        colour = "blue";
    } else if (t > 30) {
        colour = "green";
    } else if (t > 20) {
        colour = "yellow"; 
    } else if (t  >10) {
        colour = "orange";
    } else {
        colour = "red";
    }

    changeBgcolour(colour);

    if (hours < 10) {
        hours = "0" + String(hours);
    }
    if (minutes < 10) {
        minutes = "0" + String(minutes);
    }
    if (seconds < 10) {
        seconds = "0" + String(seconds);
    }


    time.innerText = `${hours}:${minutes}:${seconds}`;

    
}

function getTime(type) {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (type == "hours") {
        return hours;
    } else if (type == "minutes") {
        return minutes;
    } else {
        return seconds;
    }
}

// location

var latitude;
var longtitude;

function handleGeoSucc(position) {
   latitude = position.coords.latitude;
   longtitude = position.coords.longtitude;
   const coordsObj = {
    latitude,
    longtitude
   }
   var location = document.getElementById("location");
    location.innerText = `${latitude}, ${longtitude}`;
   saveCoords(coordsObj);
   getWeather(latitude, longtitude);
 }
 
 function handleGeoErr() {
    var location = document.getElementById("location");
    location.innerText = `We can't find your location.`;
 }
 
 function requestCoords() {
     navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
 }


// weather
function getWeather(lat, lon) {

}

// music




function main() {
    displayTime();
    requestCoords();
    setInterval(displayTime, 1000);
}

main();