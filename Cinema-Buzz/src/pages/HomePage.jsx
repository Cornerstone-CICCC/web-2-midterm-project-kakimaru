import Footer from "../components/Footer"
import Header from "../components/Header"
import Movies from "../components/Movies"
import SearchInput from "../components/SearchInput"
import TVshows from "../components/TVshows"
import styles from "./HomePage.module.scss"
import PropTypes from 'prop-types';

function HomePage({onToggleTheme, theme}) {

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <Header onToggleTheme={onToggleTheme} theme={theme} />
      <section className={styles.section}>
        <SearchInput theme={theme} />
        <h1 className={`${styles.mainTitle} ${styles[theme]}`}>Today’s Trending Programs</h1>
        <div className={styles.contents}>
          <div className={styles.wrap}>
            <h2 className={styles.title}>Movies</h2>
            <Movies theme={theme} />
          </div>
          <div className={styles.wrap}>
            <h2 className={styles.title}>TV Shows</h2>
            <TVshows theme={theme} />
          </div>
        </div>
      </section>
      <Footer theme={theme} />
    </main>
  )
}

HomePage.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};


export default HomePage
