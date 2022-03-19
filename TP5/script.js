
const buttons = document.querySelectorAll('button');
const generate = document.querySelector('.generate');
function generer(type, text) {
    const div = document.createElement('div');
    const btngenerer = document.createElement('button');
    btngenerer.setAttribute('class', `${type}`)
    generate.appendChild(btngenerer)
    btngenerer.innerHTML = `${text}`;
    setTimeout(function () {
        btngenerer.remove();
    }, 1000)
}
buttons.forEach(button => {
    button.addEventListener('click', function () {
        generer(button.classList[0], button.innerText)
    })

});

/* buttons[0].addEventListener('click', function () {
    generer(' success', 'Mon premier projet');
}) */

/* buttons[1].addEventListener('click', function () {
    generer('danger', 'Action dangereuse');

})
buttons[2].addEventListener('click', function () {
    generer('warning', 'Attention');
})
buttons[3].addEventListener('click', function () {
    generer('info', 'Information');
})*/