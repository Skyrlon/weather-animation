const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let tornado = document.getElementsByClassName('tornado');
const numberTornadoParts = 24;

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

function createTornadoParts(parent) {
    for (let i = 0; i < numberTornadoParts; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', alphabet[i]);
        parent.appendChild(div);
    }
};

function transformTornadoParts(parent, divisorRadius) {
    let rotateValue = -(360/numberTornadoParts);
    let matrix = window.getComputedStyle(document.querySelector('.a')).getPropertyValue('transform');
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    const tornadoRadius = matrixValues[14];
    let widthValue = (Math.sqrt(Math.pow(tornadoRadius / (Math.cos(90 - ((360 / numberTornadoParts) / 2))), 2) - (Math.pow(tornadoRadius, 2))))*2;
    for (let j = 0; j < parent.childNodes.length; j++) {
        rotateValue += (360/numberTornadoParts);
        if (parent.childNodes[j].nodeName.toLowerCase() == 'div') {
            parent.childNodes[j].style.cssText = "transform: rotateY(" + rotateValue + "deg)" + " " + "translateZ(" + tornadoRadius / divisorRadius + "px); width: " + widthValue / divisorRadius + "px;";
        }
    }
};

for (let i = 0; i < tornado.length; i++) {
    createTornadoParts(tornado[i]);
};

transformTornadoParts(tornado[0], 1);
transformTornadoParts(tornado[1], 1.25);
transformTornadoParts(tornado[2], 1.5);
transformTornadoParts(tornado[3], 1.75);
transformTornadoParts(tornado[4], 2);
transformTornadoParts(tornado[5], 2.25);

function createTornadoEye(parent, number) {
        let div = document.createElement('div');
        div.setAttribute('class', "tornado-eye tornado-eye-" + number);
        parent.appendChild(div);
};

createTornadoEye(tornado[1].childNodes[1], 1);
createTornadoEye(tornado[1].childNodes[4], 2);

function createTornadoMouth(parent, number) {
    let div = document.createElement('div');
    div.setAttribute('class', "tornado-mouth tornado-mouth-" + number);
    parent.appendChild(div);
};

for (let i = 0; i < 5; i++) {
    createTornadoMouth(tornado[2].childNodes[i], i+1);
};

console.log(window.getComputedStyle(document.querySelector('.a')).getPropertyValue('width'));