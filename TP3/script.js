const resultat = document.getElementById('resultat');
const lpwd = document.getElementById('lpwd');
const maj = document.getElementById('maj');
const min = document.getElementById('min');
const num = document.getElementById('num');
const carSp = document.getElementById('carSp');
const btn = document.getElementById('btn')

const randomFonction = {
    minus: RandomMinuscules,
    majus: RandomMajuscules,
    number: RandomChiffres,
    caractere: RandomCaracteres
};


btn.addEventListener('click', () => {
    const longPWD = +lpwd.value;
    const CheckMaj = maj.checked;
    const CheckMin = min.checked;
    const CheckNum = num.checked;
    const CheckCar = carSp.checked;

    resultat.innerText = genererPassword(
        CheckMin,
        CheckMaj,
        CheckCar,
        CheckNum,
        longPWD
    );

});

//____functions______

function genererPassword(minus, majus, number, caractere, longueur) {
    //initialiser le mot de passs

    let genererPassword = '';
    const nbreType = minus + majus + number + caractere;

    const typesArr = [{ minus }, { majus }, { number }, { caractere }].filter
        (item => Object.values(item)[0]);

    if (nbreType === 0) {
        return '';
    }

    for (let i = 0; i < longueur; i += nbreType) {

        typesArr.forEach(type => {

            const funcName = Object.keys(type)[0];
            genererPassword += randomFonction[funcName]();

        });
    }

    const finalPwd = genererPassword.slice(0, longueur);
    return finalPwd;
}



function RandomMinuscules() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}

function RandomMajuscules() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}
function RandomChiffres() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)


}
function RandomCaracteres() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}
