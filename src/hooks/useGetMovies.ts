import { useState } from "react";
import { useEffect } from "react";
import { getMoviesPagination, PopularMovies } from "../services/getMovies";

export const useGetMovies = () => {
  const [popularMovies, setPopularMovies] = useState<PopularMovies>();
  const [loading, setLoading] = useState(true);
  const [page, setCurrentPage] = useState(2);
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
    if (popularMovies?.total_pages && popularMovies?.total_pages <= page) {
      setBack(true);
      setNext(false);
      return page;
    } else {
      setCurrentPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMoviesPagination(page as PopularMovies).then((response) => {
      setPopularMovies(response);
      setLoading(false);
    });
  }, [page]);

  return { popularMovies, loading, page, onBack, onNext };
};
