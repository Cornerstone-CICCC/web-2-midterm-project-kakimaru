import styles from './Spinner.module.scss'

function Spinner() {
  return (
    <div className={styles.spinnerWrap}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default Spinner
