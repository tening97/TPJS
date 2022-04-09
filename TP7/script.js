const jours = document.getElementById('jours');
const heure = document.getElementById('heure');
const minute = document.getElementById('minute');
const seconde = document.getElementById('seconde');
const decompte = document.getElementById('decompte');


function rebour() {
    const anneeEnCour = moment();/* 
    const anneeSuivant = moment().add(1, 'years').add(1, 'months');
 */


    const anneeSuivant = moment('2023', "YYYY");
    let difference = anneeSuivant - anneeEnCour;
    console.log(difference)
    let days = anneeSuivant.diff(anneeEnCour, 'days')
    let duration = moment.duration(difference, 'milliseconds')
    let heurs = duration._data.hours
    let min = duration._data.minutes
    let sec = duration._data.seconds

    jours.innerHTML = days;
    heure.innerHTML = heurs < 10 ? '0' + heurs : heurs;
    minute.innerHTML = min;
    seconde.innerHTML = sec
}
setInterval(rebour, 1000)





