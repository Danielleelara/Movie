import React, {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";

interface MovieProps {
  title?: string;
  id?: string;
  overview?: string;
  popularity?: string;
  poster_path?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  backdrop_path?: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}

const Home = () => {
  const [moviesPopulars, setMoviesPopulars] = useState([]);

  const key = "7cbb88dd714f84168b91799865f574d3";
  const getMovies = async () => {
    try {
      const res = await fetch(`api/movie/popular?api_key=${key}`, {
        method: "GET",
      });
      const response = await res.json();
      setMoviesPopulars(response.results);
      console.log(response);
      return response;
    } catch (error) {
      alert("Nenhum filme encontrado!");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1 style={{ color: "blue" }}>Filmes Populares</h1>
      <div>
        {moviesPopulars?.map((movie: MovieProps, index) => {
          return (
            <div key={index}>
              <p style={{ color: "red" }}>Título: {movie?.title}</p>
              <p style={{ color: "green" }}>Overview: {movie?.overview}</p>
              <p>Popularidade: {movie?.popularity}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt="banner"
              />
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
