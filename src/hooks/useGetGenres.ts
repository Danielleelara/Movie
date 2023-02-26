import { useState } from "react";
import { useEffect } from "react";
import { getGenres } from "../services/getGenres";
import { getDetails } from "./../services/getDetails";

export interface GenresProps {
  name?: string;
  id?: number;
}

export const useGetGenres = () => {
  const [genres, setGenres] = useState([] as GenresProps);
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
