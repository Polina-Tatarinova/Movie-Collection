import styles from "./Header.module.css";
import MovieFeed from "../../pictures/icons/movieFeed.svg";

// type HeaderProps = {
//   alt: string;
//   totalMovies: number;
//   watchedMovies: number;
//   averageRating: number;
// };

export function Header(//{ alt, totalMovies, watchedMovies, averageRating }: HeaderProps//
    ) {
  return (
    <header className={styles.header}>
      <div className={styles.headerBrand}>
        <img src={MovieFeed} 
        // alt={alt} 
        className={styles.headerLogo} />
        <h1 className={styles.headerTitle}>Коллекция Фильмов</h1>
      </div>

      <div className={styles.headerStats}>
        <div className={styles.headerStat}>
          <p className={styles.headerStatValue}>
            {/* {totalMovies} */}
            </p>
          <p className={styles.headerStatLabel}>Всего фильмов</p>
        </div>

        <div className={styles.headerStat}>
          <p className={styles.headerStatValue}>
            {/* {watchedMovies} */}
            </p>
          <p className={styles.headerStatLabel}>Просмотрено</p>
        </div>

        <div className={styles.headerStat}>
          <p className={styles.headerStatValue}>
            {/* {averageRating} */}
            </p>
          <p className={styles.headerStatLabel}>Средний рейтинг</p>
        </div>
      </div>
    </header>
  );
}
