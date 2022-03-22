const btn_g = document.getElementById('gauche');
const btn_d = document.getElementById('droite');
const image_defile = document.getElementById('imagedefile');
const images = ["images/img1.jpg", "images/img2.jpg", "iimages/img3.jpg", "images/img4.jpg", "images/img5.jpg"];

creerImage();
afficherMasquer();
let p = 0;

function creerImage() {



    image_defile.style.width = (900 * images.length) + "px";
    for (let i = 0; i < images.length; i++) {
        const div = document.createElement('div');
        div.className = "photo";
        const image = document.createElement('img');
        image.setAttribute('src', `${images[i + 1]}`);
        div.appendChild(image);
        div.style.backgroundImage =
            image_defile.appendChild(div);


    }


    btn_d.onclick = function () {
        if (p < 0)
            p++;
        image_defile.style.transform = "translate(" + p * 900 + "px)";

        afficherMasquer();


    }
    setInterval(function () {
        if (p > -nbim + 1)
            p--;
        image_defile.style.transform = "translate(" + p * 900 + "px)";
        image_defile.style.transition = "all 0.5s ease";
    }, 5000)



}
btn_g.onclick = function () {
    for (let i = 0; i < images.length; i++) {
        if (p > images.length)
            p--;
        creerImage()

    }


}
/* 
function afficherMasquer() {

    if (p == -nbim + 1) {
        btn_g.style.visibility = "hidden";
    }
    else {
        btn_g.style.visibility = "visible";
    }
    if (p == 0) {
        btn_d.style.visibility = "hidden";
    }
    else {
        btn_d.style.visibility = "visible";
    }
} */


