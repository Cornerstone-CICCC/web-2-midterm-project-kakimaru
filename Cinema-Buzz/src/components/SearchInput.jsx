import styles from './SearchInput.module.scss'
import PropTypes from 'prop-types';

function SearchInput({theme}) {
  return (
    <div>
      <input type="text" placeholder="Try search..." className={`${styles.search} ${styles[theme]}`} />
    </div>
  )
}

SearchInput.propTypes = {
  theme: PropTypes.string.isRequired
};

export default SearchInput
