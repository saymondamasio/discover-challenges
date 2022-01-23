import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const posterMovie = document.getElementById("poster-movie");
const titleMovie = document.getElementById("title-movie");
const descriptionMovie = document.getElementById("description-movie");
const sessionMovie = document.getElementById("session-movie");
const sessionFallback = document.getElementById("session-fallback");
const nextMovieBtn = document.getElementById("next-movie-btn");

nextMovieBtn.addEventListener("click", async () => {
  nextMovieBtn.disabled = true;
  try {
    const randomMovieId = Math.floor(Math.random() * 10000);
    const movieData = await fetchMovie(randomMovieId);
    posterMovie.src = `${IMG_URL}/${movieData.poster_path}?${API_KEY}`;
    titleMovie.innerText = movieData.title;
    descriptionMovie.innerText = movieData.overview;
    sessionMovie.classList.remove("hidden");
    sessionFallback.classList.add("hidden");
  } catch {
    sessionMovie.classList.add("hidden");
    sessionFallback.classList.remove("hidden");
  } finally {
    nextMovieBtn.disabled = false;
  }
});

async function fetchMovie(movieId = 76341) {
  const responseDataMovie = await fetch(
    `${BASE_URL}/${movieId}?${API_KEY}&${language}`
  );

  const dataMovie = await responseDataMovie.json();
  if (dataMovie.success === false) {
    throw new Error("Not found");
  }

  return dataMovie;
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(dataMovie);
  //   }, 5000);
  // });
}
