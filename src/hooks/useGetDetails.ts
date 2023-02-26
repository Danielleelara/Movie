import { useState } from "react";
import { useEffect } from "react";
import { getDetails } from "./../services/getDetails";

export interface MovieProps {
  title?: string;
  id?: string;
  overview?: string;
  popularity?: string;
  poster_path?: string;
  backdrop_path?: string;
}

export const useGetDetails = (id: string = "") => {
  const [details, setDetails] = useState({} as MovieProps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetails(id).then((response) => {
      setDetails(response);
      setLoading(false);
    });
  }, [id]);

  return { details, loading };
};
