import styles from "./Header.module.css";
import MovieFeed from "../../pictures/icons/movieFeed.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setTotalMovies,
  setWatchedMovies,
  setAverageRating,
} from "../../slice/headerSlice";
import { useEffect, useState } from "react";
import FilmsService from "../../api/FilmsService";

type HeaderProps = {
  alt: string;
};

export function Header({ alt }: HeaderProps) {
  const [loading, setLoading] = useState(true);
  const { totalMovies, watchedMovies, averageRating } = useAppSelector(
    (state) => state.headerSlice,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    FilmsService.getFilms({
      body: {
        pagination: { page: 1, pageSize: 100 },
      },
    })
      .then((response) => {
        setLoading(false);
        const { statistic } = response;
        dispatch(setTotalMovies(statistic.total));
        dispatch(setWatchedMovies(statistic.watched));
        dispatch(setAverageRating(statistic.averageRating));
      })
      .catch((err) => {
        setLoading(true);
        console.error("Ошибка загрузки фильмов:", err);
        alert("Ошибка загрузки фильмов");
      });
  }, [dispatch]);

  if (!loading) {
    return (
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <img src={MovieFeed} alt={alt} className={styles.headerLogo} />
          <h1 className={styles.headerTitle}>Коллекция Фильмов</h1>
        </div>

        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <p className={styles.headerStatValue}>{totalMovies}</p>
            <p className={styles.headerStatLabel}>Всего фильмов</p>
          </div>

          <div className={styles.headerStat}>
            <p className={styles.headerStatValue}>{watchedMovies}</p>
            <p className={styles.headerStatLabel}>Просмотрено</p>
          </div>

          <div className={styles.headerStat}>
            <p className={styles.headerStatValue}>{averageRating}</p>
            <p className={styles.headerStatLabel}>Средний рейтинг</p>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <img src={MovieFeed} alt={alt} className={styles.headerLogo} />
          <h1 className={styles.headerTitle}>Коллекция Фильмов</h1>
        </div>

        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <p className={styles.headerStatValueSkeleton}></p>
            <p className={styles.headerStatLabelSkeleton}></p>
          </div>

          <div className={styles.headerStat}>
            <p className={styles.headerStatValueSkeleton}></p>
            <p className={styles.headerStatLabelSkeleton}></p>
          </div>

          <div className={styles.headerStat}>
            <p className={styles.headerStatValueSkeleton}></p>
            <p className={styles.headerStatLabelSkeleton}></p>
          </div>
        </div>
      </header>
    );
  }
}
