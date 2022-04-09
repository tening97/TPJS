
const colonne = document.getElementById('col')
const note = document.getElementById('note')
const container = document.getElementById('container')
const modal = document.getElementById('modal')
const close = document.getElementById('close')

let i = 1

function tp() {
    console.log(ajouter)
    const divP = document.createElement('div')


    divP.setAttribute('class', 'colonne')
    const input = document.createElement('input');
    input.setAttribute('class', 'texte')
    input.disabled = true;
    input.value = `Colonne${i}`
    i++;




    const contenu = document.createElement('div')
    contenu.setAttribute('class', 'contenu')

    const supp = document.createElement('div')
    const btnsup = document.createElement('i')
    btnsup.setAttribute('class', 'fa-solid fa-trash-can')
    supp.appendChild(btnsup)
    supp.setAttribute('class', 'delete')



    divP.append(input, contenu, supp)
    container.appendChild(divP)

    divP.addEventListener('dblclick', () => {
        input.toggleAttribute('disabled')

    })

    btnsup.addEventListener('click', () => {
        divP.remove()
        rebuild()
        i--;


    })

}

function rebuild() {

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, i) => {
        input.value = `Colonne${i + 1}`
    });
}


colonne.addEventListener('click', function () {
    const con = document.querySelectorAll('.colonne')
    if (con.length < 5) {
        tp()
    }

})


note.addEventListener('click', () => {
    modal.classList.add('content')
})

close.addEventListener('click', () => {
    modal.classList.remove('content')
})


