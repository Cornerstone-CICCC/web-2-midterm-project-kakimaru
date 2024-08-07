import styles from './ThemeBtn.module.scss'
import PropTypes from 'prop-types';
import { CiLight } from "react-icons/ci";
import { PiMoonThin } from "react-icons/pi";



function ThemeBtn({onToggleTheme, theme}) {
  return (
    <button onClick={onToggleTheme} className={styles.btn}>
      {theme === 'light' ? <CiLight color={theme === 'dark' ? "white" : 'black'} size={32} /> : <PiMoonThin color="white" size={32} />}
    </button>
  )
}

ThemeBtn.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default ThemeBtn
