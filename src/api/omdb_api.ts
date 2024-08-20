// https://www.omdbapi.com/

type TSearchMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type TSearchMoviesResponse = {
  totalResults: string;
  Search: TSearchMovie[];
};

const searchMovies = async (search: string): Promise<TSearchMoviesResponse> => {
  return fetch(
    `http://www.omdbapi.com/?s=${search}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&type=movie`
  ).then((response) => response.json());
};

type TMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

const getMovie = async (id: string): Promise<TMovie> => {
  return fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
  ).then((response) => response.json());
};

export { getMovie, searchMovies };
