import { useState } from "react";
import { useEffect } from "react";
import { getGenres } from "../services/getGenres";

export interface Genres {
  name?: string;
  id?: number;
}

export const useGetGenres = () => {
  const [genres, setGenres] = useState([] as Genres[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getGenres().then((response) => {
      setGenres(response);
      setLoading(false);
    });
  }, []);

  return { genres, loading };
};
