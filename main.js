const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let tornadoParts = document.getElementsByClassName('tornado-parts');
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

function createTornadoPartsChildren(parent) {
    for (let i = 0; i < numberTornadoParts; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', alphabet[i]);
        parent.appendChild(div);
    }
};

for (let i = 0; i < tornadoParts.length; i++) {
    createTornadoPartsChildren(tornadoParts[i]);
};

function styleTornadoParts(parent, divisorRadius) {
    let rotateValue = -(360 / numberTornadoParts);
    let tornadoRadius = 4;
    let tornadoPartsAngle = 360 / numberTornadoParts;
    let tornadoPartsAngleRad = tornadoPartsAngle / 2 * Math.PI / 180;
    let tornadoPartsAngleCos = Math.cos(tornadoPartsAngleRad);
    let tornadoPartsHyp = tornadoRadius / tornadoPartsAngleCos;
    let tornadoPartsHalfWidth = Math.sqrt((tornadoPartsHyp ** 2) - (tornadoRadius ** 2));
    let widthValue = (Math.ceil(tornadoPartsHalfWidth * 2 * 10) / 10);
    for (let j = 0; j < parent.childNodes.length; j++) {
        rotateValue += (360 / numberTornadoParts);
        if (parent.childNodes[j].nodeName.toLowerCase() == 'div') {
            parent.childNodes[j].style.cssText = `transform: rotateY(${rotateValue}deg) translateZ(${tornadoRadius / divisorRadius}vw); width: ${widthValue / divisorRadius}vw`;
        }
    }
};

styleTornadoParts(tornadoParts[0], 1);
styleTornadoParts(tornadoParts[1], 6/5);
styleTornadoParts(tornadoParts[2], 3/2);
styleTornadoParts(tornadoParts[3], 2);
styleTornadoParts(tornadoParts[4], 3);
styleTornadoParts(tornadoParts[5], 15/4);

function createTornadoEye(parent, number) {
        let div = document.createElement('div');
        div.setAttribute('class', "tornado-eye tornado-eye-" + number);
        parent.appendChild(div);
};

createTornadoEye(tornadoParts[1].childNodes[1], 1);
createTornadoEye(tornadoParts[1].childNodes[4], 2);

function createTornadoMouth(parent, number) {
    let div = document.createElement('div');
    div.setAttribute('class', "tornado-mouth tornado-mouth-" + number);
    parent.appendChild(div);
};

for (let i = 0; i < 5; i++) {
    createTornadoMouth(tornadoParts[2].childNodes[i], i+1);
};