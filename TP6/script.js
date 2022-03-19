const nav = document.querySelectorAll('nav');
const menu = document.querySelectorAll('.menu');
const ul = document.querySelector('ul');
console.log(ul);
const menus = [
    {
        icon_g: "fnav-icon fas fa-tachometer-alt",
        libelle: "Dashbord ",
        text_m: "",
        icon_d: "fa-solid fa-chevron-left"

    },
    {
        icon_g: "nav-icon fas fa-th",
        libelle: "Widgets",
        text_m: "New",
        icon_d: ""


    },
    {
        icon_g: "nav-icon fas fa-copy",
        libelle: "Layout Options",
        text_m: "6",
        icon_d: "fa-solid fa-chevron-left"


    },

    {
        icon_g: "nav-icon fas fa-chart-pie",
        libelle: " Chart",
        text_m: "",
        icon_d: "fa-solid fa-chevron-left"


    },
    {
        icon_g: "nav-icon fas fa-tree",
        libelle: " UI Elements",
        text_m: "",
        icon_d: "fa-solid fa-chevron-left"


    },
    {
        icon_g: "nav-icon fas fa-edit",
        libelle: "Forms",
        text_m: "",
        icon_d: "fa-solid fa-chevron-left"


    },
    {
        icon_g: "nav-icon fas fa-edit",
        libelle: " Tables",
        text_m: "",
        icon_d: "fa-solid fa-chevron-left"


    }

]

menus.forEach(element => {

    genererli(element.icon_g, element.libelle, element.text_m, element.icon_d);
});


//Fonctions
function genererli(cl1, text, text1, cl3) {
    const right = ""
    const li = document.createElement('li');
    ul.appendChild(li);
    const i1 = document.createElement('i');
    i1.setAttribute('class', `${cl1}`)
    li.appendChild(i1);
    const p = document.createElement('p');
    li.appendChild(p)
    p.innerHTML = `${text}`;
    const p1 = document.createElement('p')
    p1.setAttribute('class', 'pclass')
    p1.innerHTML = `${text1}`
    li.appendChild(p1);
    const i3 = document.createElement('i')
    i3.setAttribute('class', `${cl3}`)
    li.appendChild(i3);

    i3.addEventListener('click', function () {

        i3.classList.replace("fa-chevron-left", "fa-chevron-down")



    })
}


