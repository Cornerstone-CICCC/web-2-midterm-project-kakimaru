import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from './About.module.scss'

function About() {
  return (
    <main>
      <Header />
        <section className={styles.about}>
          <h1>What’s is CinemaBuzz？</h1>
          <p>Welcome to CinemaBuzz, your ultimate destination for the latest trends and insights in the world of movies and TV shows. <br /><br />
          Our mission is to keep you informed and entertained with the hottest news, reviews, and in-depth analyses of the entertainment industry.</p>
          <img src="about.webp" alt="watching movie image" className={styles.image} />
        </section>
      <Footer />
    </main>
  )
}

export default About
