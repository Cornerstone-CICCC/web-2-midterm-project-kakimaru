import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from './About.module.scss'
import PropTypes from 'prop-types';

function About({onToggleTheme, theme}) {
  return (
    <main>
      <Header onToggleTheme={onToggleTheme} theme={theme} />
        <section className={`${styles.about} ${styles[theme]}` }>
          <h1 className={styles.title}>What’s is CinemaBuzz？</h1>
          <p className={styles.text}>Welcome to CinemaBuzz, your ultimate destination for the latest trends and insights in the world of movies and TV shows. <br />
          Our mission is to keep you informed and entertained with the hottest news, reviews, and in-depth analyses of the entertainment industry.</p>
          <img src="about.webp" alt="watching movie image" className={styles.image} />
        </section>
      <Footer theme={theme} />
    </main>
  )
}

About.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default About
