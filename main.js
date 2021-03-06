﻿const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let tornadoParts = document.getElementsByClassName('tornado-parts');
const numberTornadoParts = 24;
const buttonRemote = document.getElementsByClassName('remote-button-center');
const numberButtonParts = 24;
const tornadoRadius = 20 * 4 / 100;
const buttonRadius = (6 / 5) / 2;
let finger = document.getElementsByClassName('finger');
let thumb = document.getElementsByClassName('thumb');
let phalanx = document.getElementsByClassName('phalanx');
let palm = document.getElementsByClassName('palm');
let forearm = document.getElementsByClassName('forearm');
let phalanxMiddleFrontFace = document.querySelectorAll('.phalanx_middle');
let thumbMiddleFrontFace = Array.prototype.slice.call(phalanxMiddleFrontFace, 0);
let phalanxSuperiorFrontFace = document.querySelectorAll('.phalanx_superior');
phalanxSuperiorFrontFace = Array.prototype.slice.call(phalanxSuperiorFrontFace, 0);
let shelf = document.getElementsByClassName('shelf');
let remoteButton = document.getElementsByClassName('remote-button');
let rain = document.getElementsByClassName('rain');
const snowflake = document.getElementsByClassName('snowflake');
const snowflakeBranch = ["n", "s", "nw", "ne", "se", "sw"];
const position = ['superior', 'middle', 'inferior'];
const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
const blank = [''];


function drawSuitShirt() {
    const canvas = document.getElementsByClassName('suit-shirt')[0];
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(75, 0);
    ctx.lineTo(50, 100);
    ctx.fill();
}

function drawTieBottom() {
    const canvas = document.getElementsByClassName('tie-bottom')[0];
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(50, 75);
    ctx.fill();
}

drawSuitShirt();
drawTieBottom();

for (let i = 0; i < tornadoParts.length; i++) {
    createChildren(tornadoParts[i], numberTornadoParts, '', alphabet);
}

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
    createTornadoMouth(tornadoParts[2].childNodes[i], i + 1);
}

function createChildren(parent, numberChildren, nameChildren, arrayChildren) {
    for (let i = 0; i < numberChildren; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', nameChildren + arrayChildren[i]);
        parent.appendChild(div);
    }
}

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
            parent.childNodes[j].style.cssText = `transform: rotateY(${rotateValue}deg) translateZ(${radius / divisorRadius}vw); width: ${widthValue / divisorRadius}vw`;
        }
    }
}

function createTornadoEye(parent, number) {
    let div = document.createElement('div');
    div.setAttribute('class', `tornado-eye tornado-eye-${number}`);
    parent.appendChild(div);
}

function createTornadoMouth(parent, number) {
    let div = document.createElement('div');
    div.setAttribute('class', `tornado-mouth tornado-mouth-${number}`);
    parent.appendChild(div);
}

for (let i = 0; i < phalanx.length; i++) {
    createChildren(phalanx[i], 6, 'phalanx__face phalanx__face--', faces);
}

createChildren(palm[0], 6, 'palm__face palm__face--', faces);

createChildren(forearm[0], 6, 'forearm__face forearm__face--', faces);

createChildren(thumbMiddleFrontFace[0].childNodes[0], 1, 'nail', blank);

for (let i = 0; i < shelf.length; i++) {
    createChildren(shelf[i], 6, 'shelf__face shelf__face--', faces);
}

for (let i = 0; i < phalanxSuperiorFrontFace.length; i++) {
    createChildren(phalanxSuperiorFrontFace[i].childNodes[0], 1, 'nail', blank);
}

class DataList {
    constructor(containerId, inputId, listId, options) {
        this.containerId = containerId;
        this.inputId = inputId;
        this.listId = listId;
        this.options = options;
    }

    create(filter = "") {
        const list = document.getElementById(this.listId);
        const filterOptions = this.options.filter(
            d => filter === "" || d.text.includes(filter)
        );

        if (filterOptions.length === 0) {
            list.classList.remove("active");
        } else {
            list.classList.add("active");
        }

        list.innerHTML = filterOptions
            .map(o => `<li id=${o.value}>${o.text}</li>`)
            .join("");
    }

    addListeners(datalist) {
        const container = document.getElementById(this.containerId);
        const input = document.getElementById(this.inputId);
        const list = document.getElementById(this.listId);

        input.addEventListener("input", function (e) {
            if (!container.classList.contains("active")) {
                container.classList.add("active");
            }

            datalist.create(input.value);
        });

        list.addEventListener("click", function (e) {
            if (e.target.nodeName.toLocaleLowerCase() === "li") {
                input.value = e.target.innerText;
                container.classList.remove("active");
            }
        });
    }
}

const weatherData = [
    { value: "jour_ciel-clair", text: "Jour Ciel Clair" },
    { value: "jour_nuageux", text: "Jour Nuageux" },
    { value: "jour_pluie", text: "Jour Pluie" },
    { value: "jour_orage", text: "Jour Orage" },
    { value: "jour_neige", text: "Jour Neige" },
    { value: "jour_brouillard", text: "Jour Brouillard" },
    { value: "jour_fumee", text: "Jour Fumée" },
    { value: "jour_sable", text: "Jour Sable" },
    { value: "jour_volcan", text: "Jour Volcan" },
    { value: "jour_tornade", text: "Jour Tornade" },
    { value: "nuit_ciel-clair", text: "Nuit Ciel Clair" },
    { value: "nuit_nuageux", text: "Nuit Nuageux" },
    { value: "nuit_pluie", text: "Nuit Pluie" },
    { value: "nuit_orage", text: "Nuit Orage" },
    { value: "nuit_neige", text: "Nuit Neige" },
    { value: "nuit_brouillard", text: "Nuit Brouillard" },
    { value: "nuit_fumee", text: "Nuit Fumée" },
    { value: "nuit_sable", text: "Nuit Sable" },
    { value: "nuit_volcan", text: "Nuit Volcan" },
    { value: "nuit_tornade", text: "Nuit Tornade" }
];

const datalist = new DataList(
    "cities-datalist",
    "cities-datalist-input",
    "cities-datalist-ul",
    weatherData);

datalist.create();
datalist.addListeners(datalist);

remoteButton[0].addEventListener("click", function () {
    document.getElementsByClassName('container-forearm')[0].style.animation = "hand-swing 1s forwards";
    for (let i = 0; i < document.getElementsByClassName('phalanx_inferior').length; i++) {
        document.getElementsByClassName('phalanx_inferior')[i].style.animation = "phalanx-inferior-loosen 1s linear forwards";
    }
    for (let i = 0; i < document.getElementsByClassName('phalanx_middle').length; i++) {
        document.getElementsByClassName('phalanx_middle')[i].style.animation = "phalanx-middle-loosen 1s linear forwards";
    }
    for (let i = 0; i < document.getElementsByClassName('phalanx_superior').length; i++) {
        document.getElementsByClassName('phalanx_superior')[i].style.animation = "phalanx-superior-loosen 1s linear forwards";
    }
    document.getElementsByClassName('remote-control')[0].style.animation = "remote-inclination 1s linear forwards";
    remoteButton[0].style.animation = "button-pressed 0.25s 0.75s linear forwards";
    document.getElementById('thumb_phalanx_inferior').style.animation = "thumb-inferior-click 1s forwards";
    document.getElementById('thumb_phalanx_middle').style.animation = "thumb-middle-click 1s forwards";
});

function createRain() {
    for (let i = 0; i < 200; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'rain');
        document.getElementsByClassName('screen')[0].appendChild(div);
    }
}

function createRainDrop(parent) {
    let div = document.createElement('div');
    div.setAttribute('class', 'rain-drop');
    parent.appendChild(div);
}

function createRainFall() {
    for (let i = 0; i < rain.length; i++) {
        let posLeft = Math.random() * 99.8;
        let posTop = Math.random() * 100;
        let duration = Math.random() + 0.5;
        let delay = Math.random();
        rain[i].style.left = `${posLeft}%`;
        rain[i].style.top = `-${posTop}vw`;
        rain[i].style.animation = `rain-fall ${duration}s ${delay}s linear infinite`;
    }
}

createRain();

for (let i = 0; i < rain.length; i++) {
    createRainDrop(rain[i]);
}

createRainFall();

function createSnowflake() {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'snowflake');
        document.getElementsByClassName('screen')[0].appendChild(div);
    }
}

function createSnowflakeFall() {
    for (let i = 0; i < snowflake.length; i++) {
        let posLeft = Math.random() * 99.8;
        let posTop = Math.random() * 100;
        let duration = Math.random() + 3;
        let delay = Math.random();
        snowflake[i].style.left = `${posLeft}%`;
        snowflake[i].style.top = `-${posTop}vw`;
        snowflake[i].style.animation = `snow-fall ${duration}s ${delay}s linear infinite`;
    }
}

createSnowflake();
for (let i = 0; i < snowflake.length; i++) {
    createChildren(snowflake[i], 6, "snowflake-branch-", snowflakeBranch);
}

createSnowflakeFall();