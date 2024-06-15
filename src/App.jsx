import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel";
import { useLoaderData } from "react-router-dom";
import { fetchMovies } from "./utils/api";
import { topRatedURL, popularURL } from "./utils/endpoints";
import Modal from "./components/Modal/Modal";
import { useState, createContext } from "react";

export const globalContext = createContext();

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const movies = useLoaderData();

  const value = {
    setIsModalVisible,
    setMovieDetails,
    movieDetails,
  };

  return (
    <globalContext.Provider value={value}>
      <main className={styles.mainContainer}>
        <HeroComponent movie={movies.hero.movie} />
        <section className={styles.carouselSection}>
          <Carousel list={movies.popdata} />
        </section>
        {movies.toprated && (
          <section className={styles.carouselSection}>
            <Carousel list={movies.toprated} />
          </section>
        )}
        {isModalVisible && <Modal />}
      </main>
    </globalContext.Provider>
  );
}

export const appLoader = async () => {
  const [popularData, topRatedData] = await Promise.all([
    fetchMovies(popularURL),
    fetchMovies(topRatedURL),
  ]);

  const movies = {
    hero: {
      movie: popularData.results[0],
    },
    popdata: popularData.results.filter((_, index) => index < 8),
    toprated: topRatedData.results.filter((_, index) => index < 8),
  };

  return movies;
};

export default App;
