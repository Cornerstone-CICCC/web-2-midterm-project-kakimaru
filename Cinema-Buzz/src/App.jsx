import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import PropTypes, { func } from "prop-types";
import { useEffect, useState } from "react";
import { useSearch } from "./useSearch";


function App() {
  const [theme, setTheme] = useState("dark");
  // const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [tvshows, setTVshows] = useState([]);
  const [query, setQuery] = useState('')
  
  const {results} = useSearch(query)

  console.log(results)

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWEwMDc2YTc4YmUyNDNjYzFhN2Q2N2MxOWUwNGM1OSIsIm5iZiI6MTcyMzA3MDkzOC4xNjg5NDYsInN1YiI6IjY2YjNmOGE5OTZjMWQ5MTI3MzQ1MmEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UfsxAy-BMaHTZpkO5TQSEzdZ5TPGK6CLcBLfVNsveKc",
    },
  };


  useEffect(function () {
    async function getData(type, setState) {
      try {
        // setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`,
          options
        );
        const data = await res.json();
        setState(data.results)
        // setMovies(data.results);
        // console.log(moviesData.results);
        // setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    getData('movie', setMovies);
    getData('tv', setTVshows);
  }, []);


  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onToggleTheme={handleToggleTheme}
              theme={theme}
              movies={movies}
              tvshows={tvshows}
              query={query}
              setQuery={setQuery}
            />
          }
        />
        <Route
          path="/about"
          element={<About onToggleTheme={handleToggleTheme} theme={theme} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

App.propTypes = {
  onToggleTheme: PropTypes.func,
  theme: PropTypes.string,
  movies: PropTypes.array,
  tvshows: PropTypes.array,
};

export default App;
