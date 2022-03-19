const jours = document.getElementById('jours');
const heure = document.getElementById('heure');
const minute = document.getElementById('minute');
const seconde = document.getElementById('seconde');
const decompte = document.getElementById('decompte');

const anneeEnCour = new Date().getFullYear();
const newYearTime = new Date('January 01 2023 00:00:00');

//Mise a jour du compte à rebours

function updatAnne(params) {

    const actuelTemp = new Date();
    const diff = newYearTime - actuelTemp;
    const jour = Math.floor(diff / 1000 / (60 * 60 * 24));
    const heur = Math.floor(diff / 1000 / (60 * 60)) % 24;
    const min = Math.floor(diff / 1000 / (60) % 60);
    const sec = Math.floor(diff / 1000) % 60;

    jours.innerHTML = jour;
    heure.innerHTML = heur < 10 ? '0' + heur : heur;
    minute.innerHTML = min < 10 ? '0' + min : min;
    seconde.innerHTML = sec < 10 ? '0' + sec : sec;
}
setInterval(updatAnne, 1000);
