/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { globalContext } from '../../App';
import styles from './hero.module.scss';

const HeroComponent = ({ movie }) => {
  const { setIsModalVisible, setMovieDetails } = useContext(globalContext)

  const handleButtonClick = () => {
    setIsModalVisible(true)
    setMovieDetails(movie);
  }

  return (
    <div className={styles.heroContainer}>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="hero-img" />
      <button onClick={handleButtonClick} className={styles.heroBtn}>Discover more</button>
    </div>
  );
};

export default HeroComponent;
