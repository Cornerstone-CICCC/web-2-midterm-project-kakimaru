import { useEffect, useRef } from "react";
import styles from "./SearchInput.module.scss";
import PropTypes, { func } from "prop-types";
import { useSearch } from "../useSearch";

function SearchInput({ theme, query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(function(){
    inputEl.current.focus()
  }, [])

  return (
      <input
        type="text"
        placeholder="Try search the title..."
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
