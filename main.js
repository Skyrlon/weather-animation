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
let tornado5 = document.getElementsByClassName('tornado')[4];
let tornado6 = document.getElementsByClassName('tornado')[5];

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

for (let i = 0; i < 24; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', alphabet[i]);
    tornado5.appendChild(div);
}

for (let i = 0; i < 24; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', alphabet[i]);
    tornado6.appendChild(div);
} 