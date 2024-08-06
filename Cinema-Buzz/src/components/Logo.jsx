import { Link } from "react-router-dom"
import styles from './Logo.module.scss'

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.svg" alt="Cinema Buzz logo" className={styles.logo} />
    </Link>
  )
}

export default Logo
