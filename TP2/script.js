const div_left = document.getElementById('div_left');
const div_right = document.getElementById('div_right');
const div_middle = document.getElementById('div_middle');
const pre = document.getElementById('pre');
const sui = document.getElementById('sui');


const tab = ['Mon Premier', 'Mon Deuxieme', 'Mon Troisieme', 'Mon Quatrieme'];

function remplir(div) {
    for (let i = 0; i < tab.length; i++) {
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML = tab[i];

    }
}

remplir(div_left);
const para = document.querySelectorAll('p');
for (let i = 0; i < para.length; i++) {
    const element = para[i];
    element.addEventListener("click", function () {
        element.classList.toggle('colorback')



    })

}
sui.addEventListener("click", function () {
    const allP = document.querySelectorAll('p');
    for (let i = 0; i < allP.length; i++) {
        const elementC = allP[i];
        if (elementC.className == 'colorback') {
            elementC.className = '';
            div_right.appendChild(elementC)
        }
    }
    desactiverBoutton(div_right, pre);
    desactiverBoutton(div_left, sui);

})
pre.addEventListener("click", function () {
    const allP = document.querySelectorAll('p');
    for (let i = 0; i < allP.length; i++) {
        const elementd = allP[i];
        if (elementd.className == 'colorback') {
            elementd.className = '';
            div_left.appendChild(elementd)

        }

    }
    desactiverBoutton(div_right, pre);
    desactiverBoutton(div_left, sui);


})

function desactiverBoutton(div, button) {
    if (div.childNodes.length === 0) {
        button.disabled = true;

    }
    else {
        button.disabled = false;

    }
}

desactiverBoutton(div_right, pre);





