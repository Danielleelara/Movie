import { useParams } from "react-router-dom";
import { useGetDetails } from "../../hooks/useGetDetails";

const url = import.meta.env.VITE_IMAGE;

const Details = () => {
  const params = useParams();
  const { details, loading } = useGetDetails(params.id);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>{details.title}</h1>
      <p>{details.popularity}</p>
      <img
        src={`${url}${details.poster_path}`}
        alt="banner"
        width={400}
        height={600}
      />
    </>
  );
};

export default Details;
