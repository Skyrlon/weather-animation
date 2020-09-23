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



for (let i = 0; i < tornado.length; i++) {
    createTornadoParts(tornado[i]);
    transformTornadoParts(tornado[i]);
};

function createTornadoParts(parent) {
    for (let i = 0; i < numberTornadoParts; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', alphabet[i]);
        parent.appendChild(div);
    }
};

function transformTornadoParts(parent) {
    let rotateValue = -(360/numberTornadoParts);
    let matrix = window.getComputedStyle(document.querySelector('.a')).getPropertyValue('transform');
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    for (let j = 0; j < parent.childNodes.length; j++) {
        rotateValue += (360/numberTornadoParts);
        if (parent.childNodes[j].nodeName.toLowerCase() == 'div') {
            parent.childNodes[j].style.transform = "rotateY(" + rotateValue + "deg)" + " " + "translateZ(" + matrixValues[14] + "px)";
        }
    }
};


