const key = import.meta.env.VITE_KEY;

// export const getMovies = async () => {
//   const res = await fetch(`/api/movie/popular?api_key=${key}`, {
//     method: "GET",
//   });
//   const response = await res.json();
//   return response.results;
// };

type Pagination = {
  page?: number;
  results?: [];
  total_pages?: number;
  total_results?: number;
};

const getQueryParams = (page: Pagination) => {
  return `&page=${page}`;
};

export const getMoviesPagination = async (page: Pagination = { page: 1 }) => {
  const query = getQueryParams(page);
  const res = await fetch(`/api/movie/popular?api_key=${key}${query}`, {
    method: "GET",
  });
  const response = await res.json();
  return response.results;
};
