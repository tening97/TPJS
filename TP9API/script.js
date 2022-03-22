const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const container = document.querySelector('.container')

const form = document.querySelector('form')

const search = document.querySelector('input')

console.log(search);




//Functions

function create(img, texth3, textbtn, overview) {
    const divParent = document.createElement('div');
    divParent.setAttribute('class', 'info');
    container.appendChild(divParent);
    const divFils1 = document.createElement('div');
    divFils1.setAttribute('class', 'image');
    const image = document.createElement('img');
    image.setAttribute('src', `${img}`);
    divFils1.appendChild(image);
    const divFils2 = document.createElement('div');
    divFils2.setAttribute('class', 'title');
    const h3 = document.createElement('h3');
    h3.innerHTML = `${texth3}`;
    divFils2.appendChild(h3);
    const button = document.createElement('button');
    button.innerHTML = `${textbtn}`
    if (button.innerHTML > 8) {
        button.classList.add('green')

    } else
        button.classList.add('orange')



    divFils2.appendChild(button);

    divParent.appendChild(divFils1);
    divParent.appendChild(divFils2);
    const divFils3 = document.createElement('div');
    divFils3.setAttribute('class', 'overview')
    divParent.appendChild(divFils3)
    const h3over = document.createElement('h3');
    h3over.innerHTML = 'Overview';
    const p = document.createElement('p');
    p.innerHTML = `${overview}`;
    divFils3.appendChild(h3over)
    divFils3.appendChild(p)








}
fetch(APIURL)
    .then(res => res.json())
    .then(data => data.results.forEach(element => {

        let image = IMGPATH + element.poster_path
        let title = element.title
        let vote = element.vote_average;
        let overview = element.overview
        create(image, title, vote, overview);



    }))
form.addEventListener('input', (e) => {
    container.innerHTML = 'No results found';

    e.preventDefault()
    const rechercher = search.value;
    if (rechercher) {
        fetch(SEARCHAPI + rechercher)
            .then(res => res.json())
            .then(data => data.results.forEach(element => {
                let image = IMGPATH + element.poster_path
                let title = element.title
                let vote = element.vote_average;
                let overview = element.overview;
                create(image, title, vote, overview);

            }))

    }

})