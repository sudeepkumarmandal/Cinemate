import { useState, useEffect } from "react";

const useFetch = (apiPath ,queryTerm="") => {
  const [data, setData] = useState([]);

 // const apiKey = import.meta.env.VITE_TMDB_KEY;
//  const apikey="b80d59c33d6d57ed9c7e3713f91c188a";

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_TMDB_KEY_API}&query=${queryTerm}`;

  useEffect(() => {
    async function FetchMovies() {
      try {
        const response = await fetch(url); 
        const json = await response.json();
        setData(json.results || []);
        console.log("api path is",apiPath);
        
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    FetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
