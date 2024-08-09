import ResultCard from './ResultCard';
import styles from './SearchResults.module.scss'

function SearchResults({theme, results}) {
  const maxNumResults = results;

  return (
    <div className={styles.container}>
      {maxNumResults.length > 0 ? 
        maxNumResults.map(result => (
          <ResultCard theme={theme} result={result} key={result.id} />
        )
        )
        : <p>Not found 🫠 Please retry other words!</p>
      }
    </div>
  )
}

export default SearchResults
