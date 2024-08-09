import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import ThemeBtn from "./ThemeBtn";
import PropTypes from 'prop-types';

function Header({ onToggleTheme, theme }) {
  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.headerContents}>
        <Logo />
        <div className={styles.headerItem}>
          <ThemeBtn onToggleTheme={onToggleTheme} theme={theme} />
          <NavLink to="/about" className={`${styles.link} ${styles[theme]}`}>
            About
          </NavLink>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default Header;
