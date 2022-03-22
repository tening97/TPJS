const nav = document.querySelectorAll('.sidebar');
const menu = document.querySelectorAll('.menu');
const ul = document.querySelector('.nav-links');
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
    const div = document.createElement('div');
    li.appendChild(div);
    const span = document.createElement('span');
    div.appendChild(span)
    const i1 = document.createElement('i');
    i1.setAttribute('class', `${cl1}`)
    span.appendChild(i1);
    const div1 = document.createElement('div');
    li.appendChild(div1);
    div1.setAttribute('class', 'secondD');
    const span1 = document.createElement('span');
    div1.appendChild(span1);
    span1.innerHTML = `${text}`;
    const i2 = document.createElement('i')
    i3.setAttribute('class', `${cl3}`)
    div1.appendChild(i3);
    
    
    i3.addEventListener('click', function () {

        i3.classList.replace("fa-chevron-left", "fa-chevron-down")



    })
}


