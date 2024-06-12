import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel";
import { useLoaderData } from "react-router-dom";

function App() {
  const movies = useLoaderData();

  return (
    <main className={styles.mainContainer}>
      <HeroComponent imageUrl={movies.hero.img} title={movies.hero.title} />
      <section className={styles.carouselSection}>
        <Carousel list={movies.popdata} />
      </section>
      {movies.toprated && (
        <section className={styles.carouselSection}>
          <Carousel list={movies.toprated} />
        </section>
      )}
    </main>
  );
}

export const appLoader = async () => {
  const resPopular = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
    },
  });

  const resTopRated = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`,
      },
    }
  );

  const popularData = await resPopular.json();
  const topRatedData = await resTopRated.json();

  const movies = {
    hero: {
      img: popularData.results[0]?.backdrop_path,
      title: popularData.results[0]?.title,
    },
    popdata: popularData.results.filter((_, index) => index < 8),
    toprated: topRatedData.results.filter((_, index) => index < 8),
  };

  return movies;
};

export default App;
