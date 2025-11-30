import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { MoveDetails } from "./MoveDetails";

export const MoveList = () => {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function FetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b80d59c33d6d57ed9c7e3713f91c188a"
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    }
    FetchMovies();
  }, []);
  return (
    <main>
      <div className="">
        {show ? (
          <MoveDetails />
        ) : (
          <div className="flex flex-wrap gap-5">
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => setShow(true)}>
                <Card
                  title={movie.title}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  overview={movie.overview}
                  
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
