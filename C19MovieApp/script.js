// https://api.themoviedb.org/3/movie/157336?api_key=717ccf6765dcaa577801cadcc372f394
// https://api.themoviedb.org/3/search/movie
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const API_URL = "https://api.themoviedb.org/3"
const MOVIE_URL = `${API_URL}/movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;
console.log(MOVIE_URL)

const getMovies = (url) =>{
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        showMovies(data.results);
    })
    .catch((error)=> console.log(error))
}

getMovies(MOVIE_URL);

const movieContainer = document.querySelector(".movieContainer");

const showMovies = (movies) =>{
    movieContainer.innerHTML = '';
    
    movies.forEach(movie => {
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        movieElementHTML(divTag, poster_path, title, vote_average, overview);
        movieContainer.appendChild(divTag)
    });
}

function movieElementHTML(divTag, poster_path, title, vote_average, overview) {
  divTag.innerHTML = `
        <img src="${IMAGE_URL}${poster_path}" alt="image" />
        <div class="movieTitle">
            <p>${title}</p>
            <p>${vote_average}</p>
        </div>
        <h2>Overview</h2>
        <p>${overview}</p>
    `;
}

const form = document.querySelector(".search");
const search = document.querySelector("#searchInput");

form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value
    if (searchValue) {
      getMovies(SEARCH_URL + "&query=" + searchValue);
    } else {
      getMovies(API_URL);
    }
});



