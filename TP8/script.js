const btn_g = document.getElementById('gauche');
const btn_d = document.getElementById('droite');
const image_defile = document.getElementById('imagedefile');

creerImage();
afficherMasquer();



function creerImage() {
    nbim = 5;
    p = 0;

    image_defile.style.width = (900 * nbim) + "px";
    for (let i = 1; i <= nbim; i++) {
        const div = document.createElement('div');
        div.className = "photo";
        div.style.backgroundImage = "url('./images/img" + i + ".jpg')";
        image_defile.appendChild(div);
       

    }

   /*  div1 = document.getElementsByClassName('photo');

    p = p + 1;

    if (p > div1.length) {
        p = 1;
    }
    for (i = 1; i <= div1.length; i++) {
        div1[p - i].style.display = "block";
        setTimeout(creerImage, 1000)
        p++;
    } */
        /*   ; */
     btn_g.onclick = function () {
 
         if (p > -nbim + 1)
             p--;
         image_defile.style.transform = "translate(" + p * 900 + "px)";
         /*  image_defile.style.transition = "all 0.5s ease"; */
    afficherMasquer();

    /* setTimeout(creerImage, 1000) */

}
 btn_d.onclick = function () {
     if (p < 0)


         p++;
     image_defile.style.transform = "translate(" + p * 900 + "px)";
     afficherMasquer();


 } 




}





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
}

function zoom() {

    div.style.width = (960) + "px";

}