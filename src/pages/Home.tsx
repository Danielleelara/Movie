import { useNavigate } from "react-router-dom";
import { Genres, useGetGenres } from "../hooks/useGetGenres";
import { useGetMovies } from "../hooks/useGetMovies";
import { Movie } from "../services/getMovies";

const url = import.meta.env.VITE_IMAGE;

const Home = () => {
  const navigate = useNavigate();
  const { popularMovies, onBack, onNext } = useGetMovies();
  const { genres } = useGetGenres();

  return (
    <>
      <h1 style={{ color: "blue" }}>Filmes Populares</h1>
      <div>
        <div>
          {genres?.map((genre: Genres, index) => {
            return (
              <div key={index}>
                <p style={{ color: "blue", fontSize: "20px" }}>{genre?.name}</p>
              </div>
            );
          })}
        </div>
        {popularMovies &&
          popularMovies?.results?.map((movie: Movie, index) => {
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
        <button onClick={onBack}>página anterior</button>
        <button onClick={onNext}>proxima página</button>
      </div>
    </>
  );
};

export default Home;
