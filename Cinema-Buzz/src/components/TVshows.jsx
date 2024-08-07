import Card from "./Card"
import styles from './TVshows.module.scss'
import PropTypes from 'prop-types';



function TVshows({theme}) {
  return (
    <div className={styles.container}>
      <Card theme={theme} />
    </div>
  )
}

TVshows.propTypes = {
  theme: PropTypes.string.isRequired
};

export default TVshows
