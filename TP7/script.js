const jours = document.getElementById('jours');
const heure = document.getElementById('heure');
const minute = document.getElementById('minute');
const seconde = document.getElementById('seconde');
const decompte = document.getElementById('decompte');

const anneeEnCour = new Date();
const newYearTime = new Date('January 01 2023 00:00:00');

//Mise a jour du compte à rebours

const actuelTemp = new Date();
const diff = newYearTime - actuelTemp;
// DateDiff = new Date(diff).toDateString()


jours.innerHTML = moment(diff, "YYYYMMDD").fromNow();

// setInterval(() => {

jours.innerHTML = diff
// }, 1000);
