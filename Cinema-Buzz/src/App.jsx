import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import PropTypes from 'prop-types';
import { useState } from "react";


function App() {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage onToggleTheme={handleToggleTheme} theme={theme} />} />
        <Route path="/about" element={<About onToggleTheme={handleToggleTheme} theme={theme} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

App.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default App
