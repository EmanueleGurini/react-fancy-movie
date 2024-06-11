import { useEffect, useState } from "react";
import styles from "./app.module.scss";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularList(data.results.filter((_, index) => index < 8));
      });

    fetch("https://api.themoviedb.org/3/movie/top_rated", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.AUTH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTopRatedList(data.results.filter((_, index) => index < 8));
      });
  }, []);

  return (
    <main className={styles.mainContainer}>
      <HeroComponent
        imageUrl={popularList[0]?.backdrop_path}
        title={popularList[0]?.original_title}
      />
      <section className={styles.carouselSection}>
        <Carousel list={popularList} />
      </section>
      <section className={styles.carouselSection}>
        <Carousel list={topRatedList} />
      </section>
    </main>
  );
}

export default App;
