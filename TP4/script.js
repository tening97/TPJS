const container = document.getElementById('container')
const firstQ = document.getElementById('firstQ');
const secondQ = document.getElementById('secondQ');
const thirdQ = document.getElementById('thirdQ');
const quartQ = document.getElementById('quartQ');
const btn = document.getElementById('btn');
const enonce = document.getElementById('enonce');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const radio = document.querySelectorAll('.radio')

const questions = [
    {
        question: "Quel est le meilleur de Langage de Programmatio, en 2022",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",

    },
    {
        question: "Quel est le meilleur joueur en 2022",
        a: "Sadio Mane",
        b: "Vincent Aboubakar",
        c: "Salah",
        d: "Hakimi",
        correct: "a",
    },
    {
        question: "Quel pays est en conflit avec la Russie",
        a: "Pays Bas",
        b: "France",
        c: "Ukraine",
        d: "Allemand",
        correct: "c",
    },
    {
        question: "Quelle est ma couleur préférée",
        a: "Rouge",
        b: "Vert",
        c: "Jaune",
        d: "Rose",
        correct: "d",
    }

]
let mane = 0;
let score = 0;
quizzSuivant();


function quizzSuivant() {
    deselectionnerRadio();

    const elementQ = questions[mane];
    enonce.innerText = elementQ.question;
    q1.innerText = elementQ.a;
    q2.innerText = elementQ.b;
    q3.innerText = elementQ.c;
    q4.innerText = elementQ.d;


}


function deselectionnerRadio() {
    radio.forEach(element => element.checked = false);
}
function radioSelectionner() {

    var radioChek;
    radio.forEach(element => {
        if (element.checked) {
            radioChek = element.id;

        }
    });
    return radioChek;
}




btn.addEventListener("click", function () {
    console.log(questions[mane].correct);
    const recupererRadioChek = radioSelectionner();
    if (recupererRadioChek) {
        if (recupererRadioChek === questions[mane].correct) {
            score++;
        }
        console.log(recupererRadioChek)
        mane++
        console.log(mane)

    }
    if (mane < questions.length) {
        quizzSuivant();

    }
    else {
        container.innerHTML = `Votre score est ${score} 
        <button id=""btn2 onclick="location.reload()">Rejouer</button> `;
    }

});








