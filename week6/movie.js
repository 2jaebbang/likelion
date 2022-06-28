const APIKEY = "5f7f9d5639f5547c284e5649cf503d12";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "apllication/json; charset=utf-8",
  },
};

const modal = document.querySelector(".modal");

const now_playingURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
  APIKEY +
  "&★=en-US&page=1";
const now_playing = document.getElementById("now-playing");
fetch(now_playingURL, options)
  .then((response) => response.json())
  .then((response) =>
    response.results.forEach((element) => {
      console.log(element);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      moviediv.dataset.movieId = element.id;
      moviediv.style.cursor = "pointer";

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.toggle("show");

          if (modal.classList.contains("show")) {
            modal.classList.remove("show");
          }
        }
      });

      moviediv.addEventListener("click", () => {
        let id = moviediv.dataset.movieId;
        modal.classList.toggle("show");

        getMovieDetail(id);
      });

      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      now_playing.appendChild(movie);
    })
  );

const popularURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  APIKEY +
  "&★=en-US&page=1";
const popular = document.getElementById("popular");
fetch(popularURL, options)
  .then((response) => response.json())
  .then((response) =>
    response.results.forEach((element) => {
      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      moviediv.dataset.movieId = element.id;
      moviediv.style.cursor = "pointer";

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.toggle("show");

          if (modal.classList.contains("show")) {
            modal.classList.remove("show");
          }
        }
      });

      moviediv.addEventListener("click", () => {
        let id = moviediv.dataset.movieId;
        modal.classList.toggle("show");

        getMovieDetail(id);
      });

      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      popular.appendChild(movie);
    })
  );

const top_ratedURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
  APIKEY +
  "&★=en-US&page=1";
const top_rated = document.getElementById("top-rated");
fetch(top_ratedURL, options)
  .then((response) => response.json())
  .then((response) =>
    response.results.forEach((element) => {
      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      moviediv.dataset.movieId = element.id;
      moviediv.style.cursor = "pointer";

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.toggle("show");

          if (modal.classList.contains("show")) {
            modal.classList.remove("show");
          }
        }
      });

      moviediv.addEventListener("click", () => {
        let id = moviediv.dataset.movieId;
        modal.classList.toggle("show");

        getMovieDetail(id);
      });

      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      top_rated.appendChild(movie);
    })
  );

const upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
  APIKEY +
  "&★=en-US&page=1";
const upcoming = document.getElementById("upcoming");
fetch(upcomingURL, options)
  .then((response) => response.json())
  .then((response) =>
    response.results.forEach((element) => {
      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      moviediv.dataset.movieId = element.id;
      moviediv.style.cursor = "pointer";

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.toggle("show");

          if (modal.classList.contains("show")) {
            modal.classList.remove("show");
          }
        }
      });

      moviediv.addEventListener("click", () => {
        let id = moviediv.dataset.movieId;
        modal.classList.toggle("show");

        getMovieDetail(id);
      });

      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      upcoming.appendChild(movie);
    })
  );

function getMovieDetail(id) {
  const detailMovieURL =
    `https://api.themoviedb.org/3/movie/${id}?api_key=` +
    APIKEY +
    "&language=en-US";
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
}
