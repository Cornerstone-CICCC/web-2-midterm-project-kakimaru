import Card from "./Card"
import PropTypes from 'prop-types';
import styles from './Movies.module.scss'

function Movies({theme}) {
  return (
    <div className={styles.container}>
      <Card theme={theme} />
      <Card theme={theme} />
      <Card theme={theme} />
    </div>
  )
}

Movies.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Movies
