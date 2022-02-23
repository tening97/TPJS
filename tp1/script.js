const container = document.querySelector('.container');

const add = document.getElementById('add');
add.addEventListener("click", function () {
    const items = document.createElement('div')
    const btn_items = document.createElement('div');
    const btnEdit = document.createElement('i');
    const btnDelete = document.createElement('i');
    const divArea = document.createElement('div');
    const texte = document.createElement('textarea');
    container.appendChild(items);
    items.appendChild(btn_items);
    btn_items.appendChild(btnEdit);
    btn_items.appendChild(btnDelete);
    items.appendChild(divArea);
    divArea.appendChild(texte);

    btnEdit.setAttribute('class', 'fa-solid fa-pen-to-square  ');
    btnDelete.setAttribute('class', 'fa-solid fa-trash-can')
    texte.setAttribute('cols', '40'),
        texte.setAttribute('rows', '50')
    btn_items.setAttribute('class', 'btn_items')

    btnDelete.addEventListener('click', function () {
        items.remove()

    }
    )
    btnEdit.addEventListener('click', function () {
        texte.toggleAttribute('disabled')

    })

})
