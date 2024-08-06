import styles from './Card.module.scss'

function Card() {
  return (
    <div>
      <img src="/logo.svg" alt="Cinema Buzz logo" className={styles.logo} />
      <div>
        <p>Movie Title</p>
        <p>Movie DescriptionMovie DescriptionMovie DescriptionMovie Description</p>
      </div>
    </div>
  )
}

export default Card
