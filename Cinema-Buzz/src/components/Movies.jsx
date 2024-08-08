import PropTypes from 'prop-types';
import styles from './Movies.module.scss'
import MovieCard from "./MovieCard";

function Movies({theme, movies}) {
  const maxNumMovies = movies.slice(0, 9)
  return (
    <div className={styles.container}>
      {maxNumMovies.length > 0 ? 
        maxNumMovies.map(movie => (
          <MovieCard theme={theme} title={movie.title} image={movie.poster_path} overview={movie.overview
          } key={movie.id} />
        )
        )
        : ""
      }
    </div>
  )
}

Movies.propTypes = {
  theme: PropTypes.string,
  movies: PropTypes.array,
  title: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.string,
};

export default Movies
