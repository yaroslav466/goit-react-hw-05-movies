import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a4d0f7fc82f17915aa5b6f7008bd0506';

export async function fetchTrendingMovies() {
  const resp = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return resp.data.results;
}

export async function fetchMovieDetails(movieId) {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return resp.data;
}

export async function fetchMovieCast(movieId) {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return resp.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return resp.data.results;
}

export async function fetchMovieByName(query) {
  const resp = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return resp.data.results;
}