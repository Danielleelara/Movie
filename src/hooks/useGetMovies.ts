import { useState } from "react";
import { useEffect } from "react";
import { getMoviesPagination } from "../services/getMovies";

export interface MovieProps {
  title?: string;
  id?: string;
  overview?: string;
  popularity?: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface moviesPopularProps {
  page?: number;
  results?: MovieProps;
  total_pages?: number;
  total_results?: number;
}

export const useGetMovies = () => {
  const [moviesPopulars, setMoviesPopulars] = useState(
    [] as moviesPopularProps
  );
  const [loading, setLoading] = useState(true);
  const [page, setCurrentPage] = useState(5);
  const [next, setNext] = useState(false);
  const [back, setBack] = useState(false);

  const onBack = () => {
    if (page <= 1) {
      setBack(false);
      setNext(true);
      return 1;
    } else {
      setCurrentPage(page - 1);
    }
  };

  const onNext = () => {
    if (moviesPopulars?.total_pages && moviesPopulars?.total_pages <= page) {
      setBack(true);
      setNext(false);
      return page;
    } else {
      setCurrentPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMoviesPagination().then((response) => {
      setMoviesPopulars(response);
      setLoading(false);
    });
  }, []);

  return { moviesPopulars, loading };
};
