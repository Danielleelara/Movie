const key = import.meta.env.VITE_KEY;

export const getGenres = async () => {
  const res = await fetch(`/api/genre/movie/list?api_key=${key}`, {
    method: "GET",
  });
  const response = await res.json();
  return response.genres;
};
