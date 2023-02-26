const key = import.meta.env.VITE_KEY;

export interface Movie {
  title?: string;
  id?: string;
  overview?: string;
  popularity?: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface PopularMovies {
  page?: number;
  results?: Movie[];
  total_pages?: number;
  total_results?: number;
}

const getQueryParams = (page: PopularMovies) => {
  return `&page=${page}`;
};

export const getMoviesPagination = async (
  page: PopularMovies = { page: 1 }
) => {
  const query = getQueryParams(page);
  const res = await fetch(`/api/movie/popular?api_key=${key}${query}`, {
    method: "GET",
  });
  const response = await res.json();
  return response;
};
