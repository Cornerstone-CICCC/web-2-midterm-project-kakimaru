import { useEffect, useState } from "react";

  // https://api.themoviedb.org/3/search/multi?query=apple&include_adult=false&language=en-US&page=1


export function useSearch(query) {
  const [results, setResults] = useState([])

  useEffect(function(){
    const controller = new AbortController();

    async function fetchAllData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWEwMDc2YTc4YmUyNDNjYzFhN2Q2N2MxOWUwNGM1OSIsIm5iZiI6MTcyMzA3MDkzOC4xNjg5NDYsInN1YiI6IjY2YjNmOGE5OTZjMWQ5MTI3MzQ1MmEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UfsxAy-BMaHTZpkO5TQSEzdZ5TPGK6CLcBLfVNsveKc",
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
      return;
    }
    
    fetchAllData()
    
    return function() {
      controller.abort()
    }
  }, [query])
  return {results}
}
