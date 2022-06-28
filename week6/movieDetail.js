const APIKEY = "5f7f9d5639f5547c284e5649cf503d12";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "apllication/json; charset=utf-8",
  },
};

// const URLSearch = new URLSearchParams(location.search);
// const id = URLSearch.get("id");
const moviediv = document.getElementById("moviediv");
const id = moviediv.dataset.movieId;
const detailMovieURL =
  `https://api.themoviedb.org/3/movie/${id}?api_key=` +
  APIKEY +
  "&language=en-US";
const detailMovie = document.getElementById("now-playing");
fetch(detailMovieURL, options)
  .then((response) => response.json())
  .then((response) => {
    let poster = document.getElementById("poster");
    poster.setAttribute("src", IMAGE_URL + response.backdrop_path);

    let title = document.getElementById("title");
    title.innerText = response.original_title;

    let releaseDate = document.getElementById("release_date");
    releaseDate.innerText = response.release_date;

    let overview = document.getElementById("overview");
    overview.innerText = response.overview;
  });
