import { useRef } from "react";
import styles from "./SearchInput.module.scss";
import PropTypes from "prop-types";
import { useSearch } from "../useSearch";

function SearchInput({ theme, query, setQuery }) {
  const inputEl = useRef(null);

  return (
      <input
        type="text"
        placeholder="Try search programs..."
        className={`${styles.search} ${styles[theme]}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
  );
}

SearchInput.propTypes = {
  theme: PropTypes.string,
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

export default SearchInput;
