/* eslint-disable react/prop-types */
import { useContext } from "react";
import { globalContext } from "../../App";
import styles from "./moviecard.module.scss";

const MovieCard = ({ movie, refProp }) => {

  const { setIsModalVisible, setMovieDetails } = useContext(globalContext);

  const handleCardClick = () => {
    setIsModalVisible(true);
    setMovieDetails(movie);
  }

  return (
    <>
      <div ref={refProp} className={styles.movieCard} onClick={handleCardClick}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="movie-card-img"
        />
        <p>{movie.original_title}</p>
      </div>
    </>
  );
};

export default MovieCard;
