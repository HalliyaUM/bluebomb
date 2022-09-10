var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
var Target_temp = document.getElementById("temperature");
var Target_video = document.getElementById("player");
var Target_playBtn = document.getElementById("playBtn");
Target_video.style.visibility = "hidden";
Target_playBtn.style.visibility = "visible";

function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
        hours %= 12;
    }
    // 24시간제 선택할수있게 하면 좋을듯!

    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    Target_apm.innerText = `${AmPm}`;
    changeBgcolour(seconds);

}

// background colour
function changeBgcolour(seconds) {
    var colour = "black";
    if (seconds > 50) {
        colour = "#79797C";
    } else if (seconds > 40) {
        colour = "#d0a946";
    } else if (seconds > 30) {
        colour = "#C46F43";
    } else if (seconds > 20) {
        colour = "#FFCD91"; 
    } else if (seconds > 10) {
        colour = "#ADDFAC";
    } else {
        colour = "#000000";
    }
    document.body.style.backgroundColor = colour;
}

// weather
const API = '9d77291a1b3ec497dabe1310e9ba9cb7'; // 이거 그냥 준식 개인용 api
const LOCATION = 'Sydney';

function getWeather(LOCATION) {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + LOCATION + '&appid=' + API + '&units=metric';
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        //console.log(json);
        let weather = json.weather[0].main;
        let temp = json.main.temp;
        Target_temp.innerText = weather + ', ' + temp + '℃';
      });
}

// music


function playMusic() {
  player.playVideo();
  Target_playBtn.style.visibility = "hidden";

}

var targetTitle = document.getElementById("title");

var tag = document.createElement('script'); 
tag.src = "https://www.youtube.com/player_api"; 
var firstScriptTag = document.getElementsByTagName('script')[0]; 
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 

var id;

const noEmbed = "https://noembed.com/embed?url=";
const urlForm = "https://www.youtube.com/watch?v=";

function getMusic() {
  fetch("https://halliyaum.github.io/bluebomb/musicJson/" + "sunny.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    numOfSongs = json.numOfSongs - 1;
    let random = Math.floor((Math.random() * (numOfSongs - 0) + 0));
    id = json.music[random].id;
  }); 

  fetch(noEmbed + urlForm + id)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    targetTitle.innerText = json.music[random].id;
  }); 
}

// api 코드 다운로드 후 제어관련 함수 생성. 
var player; 
function onYouTubePlayerAPIReady() { 
  player = new YT.Player('player', {
    height: '315',
    width: '560', 
    videoId: 'I0_ZXHzKysc', // 이거 블루밍 아이디
    autoplay: 1,
    playerVars: {
      'playsinline': 1
    }, 
    events: { 
      'onReady': onPlayerReady, 
      //'onStateChange': onPlayerStateChange
    } 
  }); 
}; 
function onPlayerReady (event) {
  //event.target.playVideo();
  //event.target.mute();
  //player.playVideo();
  //event.target.unmute();
}


function playVideo() {
  player.playVideo();
}
function stopVideo() {
  player.stopVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function main() {
    clock();
    setInterval(clock, 1000); //1초마다 실행
}

main();
setTimeout(function() {
    playVideo();
}, 3000)
getWeather(LOCATION);