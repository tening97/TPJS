const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const header = document.querySelector('header')
const toggle = document.getElementById('toggle')
const entete = document.querySelectorAll('.open')
const image = document.querySelectorAll('img')

const menus = [
    {
        icon_g: "fnav-icon fas fa-tachometer-alt",
        libelle: "Dashbord ",
        text_m: "",
        style_text: "",
        icon_d: "fa-solid fa-chevron-left"

    },
    {
        icon_g: "nav-icon fas fa-th",
        libelle: "Widgets",

        text_m: "New",
        style_text: "#cc444a",
        icon_d: ""


    },
    {
        icon_g: "nav-icon fas fa-copy",
        libelle: "Layout Options",
        text_m: "6",
        style_text: "#49a0b5",
        icon_d: "fa-solid fa-chevron-left"


    },

    {
        icon_g: "nav-icon fas fa-chart-pie",
        libelle: " Chart",
        text_m: "",
        style_text: "",
        icon_d: "fa-solid fa-chevron-left"


    },
    {
        icon_g: "nav-icon fas fa-tree",
        libelle: " UI Elements",
        text_m: "",
        style_text: "",
        icon_d: "fa-solid fa-chevron-left"


    },
    {
        icon_g: "nav-icon fas fa-edit",
        libelle: "Forms",
        text_m: "",
        style_text: "",
        icon_d: "fa-solid fa-chevron-left"


    },
    {
        icon_g: "nav-icon fas fa-edit",
        libelle: " Tables",
        text_m: "",
        style_text: "",
        icon_d: "fa-solid fa-chevron-left"


    }

]

menus.forEach(element => {

    genererli(element.icon_g, element.libelle, element.text_m, element.style_text, element.icon_d);
});


//Fonctions
function genererli(cl1, text, text1, styletxt1, cl3) {
    const right = ""
    const li = document.createElement('li');
    ul.appendChild(li);
    const firstDiv = document.createElement('div');
    firstDiv.setAttribute('class', 'icon1')
    const i1 = document.createElement('i');
    i1.setAttribute('class', `${cl1}`)
    firstDiv.appendChild(i1)

    const scndDiv = document.createElement('div');
    scndDiv.setAttribute('class', 'text')
    const nomMenu = document.createElement('span')
    nomMenu.setAttribute('class', 'nomMenu')
    nomMenu.innerHTML = `${text}`;
    const badge = document.createElement('span')
    badge.setAttribute('class', 'new')
    badge.style.backgroundColor = `${styletxt1}`
    badge.innerHTML = text1
    const i2 = document.createElement('i')
    i2.setAttribute('class', `${cl3}`)
    scndDiv.append(nomMenu, badge, i2)

    li.append(firstDiv, scndDiv)



    li.addEventListener('click', function () {

        i2.classList.toggle('rotate')
        li.classList.add('click')
    })





    toggle.addEventListener('click', () => {
        nav.classList.toggle('hide')
        scndDiv.classList.toggle('close')
        header.classList.toggle('topp')
        firstDiv.classList.toggle('close')
        nav.classList.toggle('open')
        entete.forEach(element => {
            element.classList.toggle('close')

        });
        image.forEach(element => {
            element.classList.toggle('close')

        });




    })

}










