import { useLoaderData } from "react-router-dom";
import { fetchMovies } from "../../utils/api";
import { baseURL } from "../../utils/endpoints";
import HeroComponent from "../../components/HeroComponent/HeroComponent";

export default function Movie() {
  const movie = useLoaderData();

  return (
    <>
      <div>
        <HeroComponent title={movie.title} imageUrl={movie.backdrop_path} />
        <h1>Titolo: {movie.title}</h1>
      </div>
    </>
  );
}

export const movieLoader = async ({ params }) => {
  const movieUrl = `${baseURL}/${params.id}?language=en-US`;
  const movie = await fetchMovies(movieUrl);

  return movie;
};
