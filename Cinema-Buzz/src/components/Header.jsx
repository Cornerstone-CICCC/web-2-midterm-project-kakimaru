import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Logo from './Logo'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContents}>
        <Logo />
        <NavLink to="/about" className={styles.title}>
          About
        </NavLink>
      </div>
    </header>
  )
}

export default Header
