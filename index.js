let eltBtn = document.getElementsByClassName("btn");

let eltChemin = document.getElementsByClassName("chemin");
let eltCheminStatus = document.getElementsByClassName("chemin-status");
let eltHerbe = document.getElementsByClassName("herbe");
let eltCiel = document.getElementsByClassName("ciel");
let eltSoleil = document.getElementsByClassName("soleil");
let eltContainer = document.getElementsByClassName("container");
let eltCorps = document.getElementsByClassName("corps");
let eltPaupiere = document.getElementsByClassName("paupiere");
let eltLevre = document.getElementsByClassName("levre");
let eltBrasGauche = document.getElementsByClassName("bras_gauche");
let eltBrasGaucheInferieur = document.getElementsByClassName("bras_gauche-inferieur");
let eltCoucou = document.getElementsByClassName("coucou");

eltBtn[0].addEventListener("click", function () {
    
    eltChemin[0].style.animation = "chemin-deroule 1s both";
    eltCheminStatus[0].style.animation = "chemin-status 1s both";
    eltHerbe[0].style.animation = "herbe-etendre 1s 1s forwards";
    eltCiel[0].style.animation = "ciel-monter 1s 2s forwards";
    eltSoleil[0].style.animation = "soleil-monter 1s 3s forwards";
    eltContainer[0].style.animation = "container-monter 1s 4s forwards";
    eltCorps[0].style.animation = "corps-rotate 1s 5s forwards";
    for (let i = 0; i < eltPaupiere.length; i++) {
        eltPaupiere[i].style.animation = "visage-decouvert 1s 6s forwards";
    };
    for (let i = 0; i < eltLevre.length; i++) {
        eltLevre[i].style.animation = "visage-decouvert 1s 6s forwards";
    };
    eltBrasGauche[0].style.animation = "bras-leve 0.7s 7s forwards"
    eltBrasGaucheInferieur[0].style.animation = "wave 1s 7.3s ease-in-out alternate infinite both";
    eltCoucou[0].style.animation = "coucou-apparition 1s 8s both";
});