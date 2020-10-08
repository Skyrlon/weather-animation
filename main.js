const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let tornadoParts = document.getElementsByClassName('tornado-parts');
const numberTornadoParts = 24;
const buttonRemote = document.getElementsByClassName('remote-button-center');
const numberButtonParts = 24;
const tornadoRadius = 20 * 4 / 100;
const buttonRadius = (7 / 5) /2;
let finger = document.getElementsByClassName('finger');
let thumb = document.getElementsByClassName('thumb');
let phalanx = document.getElementsByClassName('phalanx');
let palm = document.getElementsByClassName('palm');
let forearm = document.getElementsByClassName('forearm');
const position = ['superior', 'middle', 'inferior'];
const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];


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

for (let i = 0; i < tornadoParts.length; i++) {
    createChildren(tornadoParts[i], numberTornadoParts, '', alphabet);
};

styleParts(tornadoParts[0], tornadoRadius, 1, numberTornadoParts);
styleParts(tornadoParts[1], tornadoRadius, 6 / 5, numberTornadoParts);
styleParts(tornadoParts[2], tornadoRadius, 3 / 2, numberTornadoParts);
styleParts(tornadoParts[3], tornadoRadius, 2, numberTornadoParts);
styleParts(tornadoParts[4], tornadoRadius, 3, numberTornadoParts);
styleParts(tornadoParts[5], tornadoRadius, 15 / 4, numberTornadoParts);

createChildren(buttonRemote[0], numberButtonParts, '', alphabet);
styleParts(buttonRemote[0], buttonRadius, 1, numberButtonParts);

createTornadoEye(tornadoParts[1].childNodes[1], 1);
createTornadoEye(tornadoParts[1].childNodes[4], 2);

for (let i = 0; i < 5; i++) {
    createTornadoMouth(tornadoParts[2].childNodes[i], i+1);
};

function createChildren(parent, numberChildren, nameChildren, arrayChildren) {
    for (let i = 0; i < numberChildren; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', nameChildren + arrayChildren[i]);
        parent.appendChild(div);
    }
};

function styleParts(parent, radius, divisorRadius, numberParts) {
    let rotateValue = -(360 / numberParts);
    let partsAngle = 360 / numberParts;
    let partsAngleRad = partsAngle / 2 * Math.PI / 180;
    let partsAngleCos = Math.cos(partsAngleRad);
    let partsHyp = radius / partsAngleCos;
    let partsHalfWidth = Math.sqrt((partsHyp ** 2) - (radius ** 2));
    let widthValue = (Math.ceil(partsHalfWidth * 2 * 10) / 10);
    for (let j = 0; j < parent.childNodes.length; j++) {
        rotateValue += (360 / numberParts);
        if (parent.childNodes[j].nodeName.toLowerCase() == 'div') {
            parent.childNodes[j].style.cssText = `transform: rotateY(${rotateValue}deg) translateZ(${buttonRadius / divisorRadius}vw); width: ${widthValue / divisorRadius}vw`;
        }
    }
};

function createTornadoEye(parent, number) {
    let div = document.createElement('div');
    div.setAttribute('class', `tornado-eye tornado-eye-${number}`);
    parent.appendChild(div);
};

function createTornadoMouth(parent, number) {
    let div = document.createElement('div');
    div.setAttribute('class', `tornado-mouth tornado-mouth-${number}`);
    parent.appendChild(div);
};

for (let i = 0; i < finger.length; i++) {
    createChildren(finger[i], 3, 'phalanx phalanx_', position);
};

createChildren(thumb[0], 2, 'phalanx phalanx_', position);

for (let i = 0; i < phalanx.length; i++) {
    createChildren(phalanx[i], 6, 'phalanx__face phalanx__face--', faces);
};

createChildren(palm[0], 6, 'palm__face palm__face--', faces);

createChildren(forearm[0], 6, 'forearm__face forearm__face--', faces);