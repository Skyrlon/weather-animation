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

function drawSuitShirt() {
    const canvas = document.getElementsByClassName('suit-shirt')[0];
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(75, 0);
    ctx.lineTo(50, 100);
    ctx.fill();
};

function drawTieBottom() {
    const canvas = document.getElementsByClassName('tie-bottom')[0];
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(50, 75);
    ctx.fill();
};

drawSuitShirt();
drawTieBottom();

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let tornado1 = document.getElementsByClassName('tornado')[0];
let tornado2 = document.getElementsByClassName('tornado')[1];
let tornado3 = document.getElementsByClassName('tornado')[2];
let tornado4 = document.getElementsByClassName('tornado')[3];

for (let i = 0; i < 24; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', alphabet[i]);
    tornado1.appendChild(div);
}

for (let i = 0; i < 24; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', alphabet[i]);
    tornado2.appendChild(div);
}

for (let i = 0; i < 24; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', alphabet[i]);
    tornado3.appendChild(div);
}

for (let i = 0; i < 24; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', alphabet[i]);
    tornado4.appendChild(div);
} 