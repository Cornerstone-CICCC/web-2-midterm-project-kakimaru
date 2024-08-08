import styles from './MovieCard.module.scss'
import PropTypes from 'prop-types';


function MovieCard({theme, title, overview, image}) {

  return (
    <div className={`${styles[theme]} ${styles.card}`}>
      <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${image}`} alt="Cinema Buzz logo" className={styles.image} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{overview}</p>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
};

export default MovieCard
