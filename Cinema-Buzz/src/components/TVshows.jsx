import TVshowCard from "./TVshowCard";
import styles from './TVshows.module.scss'
import PropTypes from 'prop-types';



function TVshows({theme, tvshows}) {
  const maxNumTVshows = tvshows.slice(0, 9)

  return (
    <div className={styles.container}>
      {maxNumTVshows.length > 0 ? 
        maxNumTVshows.map(tvshow => 
          (
          <TVshowCard theme={theme} title={tvshow.name} image={tvshow.poster_path} overview={tvshow.overview} key={tvshow.id} />
          )
        )
       : ''}
    </div>
  )
}

TVshows.propTypes = {
  theme: PropTypes.string,
  tvshows: PropTypes.array,
};

export default TVshows
