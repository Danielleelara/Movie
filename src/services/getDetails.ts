const key = import.meta.env.VITE_KEY;

export const getDetails = async (id: string) => {
  const res = await fetch(`/api/movie/${id}?api_key=${key}`, {
    method: "GET",
  });
  const response = await res.json();
  return response;
};
