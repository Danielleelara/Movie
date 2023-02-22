import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MovieProps {
  title?: string;
  id?: string;
  overview?: string;
  popularity?: string;
  poster_path?: string;
  backdrop_path?: string;
}

const Details = () => {
  const [details, setDetails] = useState({} as MovieProps);
  const params = useParams();
  console.log("recebido", params);

  const key = "7cbb88dd714f84168b91799865f574d3";
  const getDetails = async () => {
    try {
      const res = await fetch(`/api/movie/${params.id}?api_key=${key}`, {
        method: "GET",
      });
      const response = await res.json();
      setDetails(response);
      console.log("resposta", details);
      return response;
    } catch (error) {
      alert("Nenhum filme encontrado!");
    }
  };

  useEffect(() => {
    async function getRequest() {
      await getDetails();
    }
    getRequest();
  }, [params.id]);

  return (
    <>
      <div>{details.title}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt="banner"
        width={400}
        height={600}
      />
    </>
  );
};

export default Details;
