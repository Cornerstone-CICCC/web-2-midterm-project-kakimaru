import Footer from "../components/Footer"
import Header from "../components/Header"
import Movies from "../components/Movies"
import SearchInput from "../components/SearchInput"
import TVshows from "../components/TVshows"
import styles from "./HomePage.module.scss"

function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <SearchInput />
        <h1 className={styles.mainTitle}>Today’s Trending Programs</h1>
        <h2 className={styles.title}>Movies</h2>
        <Movies />
        <h2>TV Shows</h2>
        <TVshows />
      </section>
      <Footer />
    </main>
  )
}

export default HomePage
