import styles from './Card.module.scss'
import PropTypes from 'prop-types';


function Card({theme}) {
  return (
    <div className={`${styles[theme]} ${styles.card}`}>
      <img src="/logo.svg" alt="Cinema Buzz logo" className={styles.image} />
      <div className={styles.info}>
        <p className={styles.title}>Movie Title</p>
        <p className={styles.text}>Movie DescriptionMovie DescriptionMovie DescriptionMovie Description Description Description Description Description Description Description Description</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Card
