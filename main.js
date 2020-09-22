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
let tornado = document.getElementsByClassName('tornado');

function createTornadoParts(parent) {
    for (let i = 0; i < 24; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', alphabet[i]);
        parent.appendChild(div);
    }
};

for (let i = 0; i < tornado.length; i++) {
    createTornadoParts(tornado[i]);
};

let tornado1A = document.querySelector('.tornado1 .a');

let matrix = window.getComputedStyle(tornado1A).getPropertyValue('transform');

const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');


const tornado2 = document.getElementsByClassName('tornado2')[0];


let k = -15;
for (let j = 0; j < tornado2.childNodes.length; j++) {
    k += 15;
    if (tornado2.childNodes[j].nodeName.toLowerCase() == 'div') {
        tornado2.childNodes[j].style.transform = "rotateY(" + k + "deg)" + " " + "translateZ(" + matrixValues[14] + "px)";
        console.log(k);
    }
};