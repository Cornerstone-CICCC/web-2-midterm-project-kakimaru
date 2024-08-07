import styles from './Footer.module.scss'
import PropTypes from 'prop-types';

function Footer({theme}) {
  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p className={`${styles.text} ${styles[theme]}`}>Kakimaru</p>
    </footer>
  )
}

Footer.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Footer
