import { useEffect, useState } from "react";

  // https://api.themoviedb.org/3/search/multi?query=apple&include_adult=false&language=en-US&page=1



const API_AUTHORIZATION = import.meta.env.VITE_API_AUTHORIZATION

export function useSearch(query) {
  const [results, setResults] = useState([])

  useEffect(function(){
    const controller = new AbortController();

    async function fetchAllData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_AUTHORIZATION}`,
        },
        signal: controller.signal
      };

      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options)

        if(!res.ok) throw new Error('Something went wrong with fetching data')

        const data = await res.json()
        setResults(data.results)
      } catch(err) {
        console.error(err.message)
      }
    }
    
    if(query.length < 3) {
      setResults([])
      return;
    }
    
    fetchAllData()
    
    return function() {
      controller.abort()
    }
  }, [query])
  return {results}
}
