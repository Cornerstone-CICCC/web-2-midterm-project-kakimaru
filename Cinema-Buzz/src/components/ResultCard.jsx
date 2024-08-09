import styles from './ResultCard.module.scss'

function ResultCard({theme, result}) {
  console.log(result)
  const title = (result.media_type === 'tv' || result.media_type === 'person') ? result.name : result.title;
  const image = result.media_type === 'person' ? result.profile_path : result.poster_path;

  const {overview} = result

  //profile_path

  return (
    <div className={`${styles[theme]} ${styles.card}`}>
      <img src={image ? `https://media.themoviedb.org/t/p/w220_and_h330_face/${image}` : "/nodata.webp"} alt="Cinema Buzz logo" className={styles.image} />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{overview}</p>
      </div>
    </div>
  )
}

export default ResultCard
