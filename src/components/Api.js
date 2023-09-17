const KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTcyZWY2NDFlMjljMDQ4ODUyMDU0OThkYTgzM2MxMCIsInN1YiI6IjY1MDA4MTQxZGI0ZWQ2MTAzODU1ZjQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tw33p16nzVWjFsb-CvIHBGuQg-2EWj-24ivkLMNAZS8';
const headers = {
  Accept: 'application/json',
  Authorization: KEY,
};

export const fetchMovies = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    { headers }
  );
  const movies = await response.json();
  return movies;
};

export const fetchHomeList = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    { headers }
  );
  const HomeList = await response.json();
  return HomeList;
};

export const fetchMovieDetals = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    { headers }
  );
  const movieDetals = await response.json();
  return movieDetals;
};

export const fetchCast = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    { headers }
  );

  const CastList = await response.json();
  return CastList;
};

export const fetchReviews = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    { headers }
  );
  const reviews = await response.json();
  return reviews;
};
