import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  title?: string;
  id?: string;
  overview?: string;
  popularity?: string;
  poster_path?: string;
  backdrop_path?: string;
}

const Home = () => {
  const [moviesPopulars, setMoviesPopulars] = useState([]);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_IMAGE;
  const key = import.meta.env.VITE_KEY;

  const getMovies = async () => {
    try {
      const res = await fetch(`/api/movie/popular?api_key=${key}`, {
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
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <button onClick={() => navigate(`/details/${movie.id}`)}>
                Título: {movie?.title}
              </button>
              <p style={{ color: "red" }}>Título: {movie?.title}</p>
              <p style={{ color: "green" }}>Overview: {movie?.overview}</p>
              <p>Popularidade: {movie?.popularity}</p>
              <img
                src={`${url}${movie?.poster_path}`}
                alt="banner"
                width={400}
                height={600}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
