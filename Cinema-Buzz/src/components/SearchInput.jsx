import styles from './SearchInput.module.scss'

function SearchInput() {
  return (
    <div>
      <input type="text" placeholder="Try search..." className={styles.search} />
    </div>
  )
}

export default SearchInput
