const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_URL = `${BASE_URL}popular?${API_KEY}`
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
// const API_URL = BASE_URL + "movie/popular?" + API_KEY;

const movieDetails = document.getElementById("movieDetails");

const getMovie = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.results)
    })
    .catch((error) => console.log(error));
};

getMovie(API_URL)

const displayMovies = (movies) =>{
  movies.forEach(movie => {
    const { title, overview, vote_average, poster_path} = movie;
    const image = `${IMAGE_URL}${poster_path}`;
    const movieElement = document.createElement("div");
    movieElement.classList = "movieInnerContainer";
    movieElementHTML(movieElement, image, title, vote_average, overview);
  });
}


function movieElementHTML(movieElement, image, title, vote_average, overview) {
  movieElement.innerHTML = `<div class="imageContainer">
          <img
              src="${image}"
              alt="image"
          />
          </div>
          <div class="movieInfo">
              <h1>${title}</h1>
              <span class="rating">${vote_average}</span>
          </div>
          <div class="overview">
              <h2>Overview</h2>
              ${overview}
          </div>`;
  movieDetails.appendChild(movieElement);
}

// fetch(API_URL)
//   .then((response) => response.text()) 
//   .then((text) => JSON.parse(text)) 
//   .then((data) => {
//     console.log(data); 
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });


