const APIURL = "https://www.themealdb.com/api/json/v1/1/random.php"
const APIBYID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const APIBYNom = "https://www.themealdb.com/api/json/v1/1/search.php?s="


const container = document.querySelector('.container')
const header = document.createElement('header');
const input = document.createElement('input');
const iSearch = document.createElement('i');
iSearch.classList.add('fa-solid', 'fa-magnifying-glass')
header.append(input, iSearch)

const firstDiv = document.createElement('div');
firstDiv.setAttribute('class', 'favorite');
const h5 = document.createElement('h5');
h5.innerHTML = 'Mes recettes Favorites'
const divFav = document.createElement('div')
divFav.setAttribute('class', 'block')
const divImg = document.createElement('div')
const imgFav = document.createElement('img')
const span = document.createElement('span')
span.innerText = 'Pancakes'
const ul = document.createElement('ul')

divImg.append(imgFav, span)
divFav.appendChild(divImg)
firstDiv.append(h5, divFav)

const button = document.createElement('button')
const iheart = document.createElement('i')
iheart.setAttribute('class', 'fa-solid fa-heart')

const thirdDiv = document.createElement('div');
thirdDiv.setAttribute('class', 'popup')

const iclose = document.createElement('i')
iclose.setAttribute('class', 'fa-solid fa-xmark')

container.append(header, firstDiv)


function apiRecette(image, nomRcette, overview) {





    const secondDiv = document.createElement('div');
    secondDiv.setAttribute('class', 'recette-generer')

    const divImgGenere = document.createElement('div')
    divImgGenere.setAttribute('class', 'imagebtn')
    const imageGenere = document.createElement('img')
    imageGenere.setAttribute('src', image)


    button.innerHTML = 'Generer une recette'

    divImgGenere.append(imageGenere, button)


    const divFooter = document.createElement('div')
    divFooter.setAttribute('class', 'titlePopup')
    const h3 = document.createElement('h3');
    h3.innerHTML = `${nomRcette}`
    divFooter.append(h3, iheart)

    secondDiv.append(divImgGenere, divFooter)





    const divClose = document.createElement('div')
    divClose.setAttribute('class', 'entete')
    const h3pop = document.createElement('h3')
    h3pop.innerHTML = `${nomRcette}`


    divClose.append(h3pop, iclose)

    const entetePop = document.createElement('div')
    entetePop.setAttribute('class', 'imgPop')
    const imgPop = document.createElement('img')
    imgPop.setAttribute('src', image)
    const p = document.createElement('p')
    p.innerHTML = `${overview}`
    const h4 = document.createElement('h4');
    h4.innerHTML = 'Ingredients'

    entetePop.append(imgPop, p, h4, ul)


    thirdDiv.append(divClose, entetePop)


    container.append(secondDiv, thirdDiv)

}




fetch(APIURL)
    .then(res => res.json())
    .then(data => {
        apiRecette(data.meals[0].strMealThumb, data.meals[0].strMeal, data.meals[0].strInstructions)
        const ule = document.querySelector('ul')
        let li = ''
        for (let i = 1; i <= 20; i++) {
            li += '<li>' + data.meals[0][`strIngredient${i}`] + '</li>';
            if (li === "" || li === null) {

                continue;
                console.log(li);
            }
            else {
                ule.innerHTML = li

            }
        }


    })

//Click button generer
button.addEventListener('click', function () {
    location.reload()

})
//Appel du popup
iheart.addEventListener('click', function () {
    thirdDiv.classList.toggle("show");

})
//Fermer le popup
iclose.addEventListener('click', function () {
    thirdDiv.classList.remove("show");

})
//Rechercher
iSearch.addEventListener('click', function () {

    rechercher = input.value;
    if (isNaN(rechercher)) {
        fetch(APIBYNom + rechercher)
            .then(res => res.json())
            .then(data => apiRecette(data.meals[0].strMealThumb, data.meals[0].strMeal, data.meals[0].strInstructions)
            )
    }
    else
        container.innerHTML = 'INTROUVABLE'




})



