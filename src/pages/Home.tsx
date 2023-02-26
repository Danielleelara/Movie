import { useNavigate } from "react-router-dom";
import { GenresProps, useGetGenres } from "../hooks/useGetGenres";
import { MovieProps, useGetMovies } from "../hooks/useGetMovies";

const Home = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_IMAGE;
  const { moviesPopulars, loading } = useGetMovies();
  const { genres } = useGetGenres();

  return (
    <>
      <h1 style={{ color: "blue" }}>Filmes Populares</h1>
      <div>
        <div>
          {Array.isArray(genres) &&
            genres?.map((genre: GenresProps, index) => {
              return (
                <div key={index}>
                  <p style={{ color: "blue", fontSize: "20px" }}>
                    {genre?.name}
                  </p>
                </div>
              );
            })}
        </div>
        {Array.isArray(moviesPopulars) &&
          moviesPopulars?.map((movie: MovieProps, index: any) => {
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
    </>
  );
};

export default Home;
