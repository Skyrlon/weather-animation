let eltBtn = document.getElementsByClassName("btn");

let road = document.getElementsByClassName("road");
let roadStatus = document.getElementsByClassName("road-status");
let grass = document.getElementsByClassName("grass");
let sky = document.getElementsByClassName("sky");
let sun = document.getElementsByClassName("sun");
let container = document.getElementsByClassName("container");
let body = document.getElementsByClassName("body");
let eyelid = document.getElementsByClassName("eyelid");
let lip = document.getElementsByClassName("lip");
let armLeft = document.getElementsByClassName("arm_left");
let armLeftInferior = document.getElementsByClassName("arm_left-inferior");
let hello = document.getElementsByClassName("hello");

eltBtn[0].addEventListener("click", function () {
    
    road[0].style.animation = "road-rollout 1s both";
    roadStatus[0].style.animation = "road-status 1s both";
    grass[0].style.animation = "grass-expansion 1s 1s forwards";
    sky[0].style.animation = "sky-ascend 1s 2s forwards";
    sun[0].style.animation = "sun-ascend 1s 3s forwards";
    container[0].style.animation = "container-showup 1s 4s forwards";
    body[0].style.animation = "body-rotate 1s 5s forwards";
    for (let i = 0; i < eyelid.length; i++) {
        eyelid[i].style.animation = "face-uncovered 1s 6s forwards";
    };
    for (let i = 0; i < lip.length; i++) {
        lip[i].style.animation = "face-uncovered 1s 6s forwards";
    };
    armLeft[0].style.animation = "arm-raised 0.7s 7s forwards"
    armLeftInferior[0].style.animation = "wave 1s 7.3s ease-in-out alternate infinite both";
    hello[0].style.animation = "hello-appearance 1s 8s both";
});