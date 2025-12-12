import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { MoveDetails } from "./MoveDetails";
import useFetch from "../hooks/useFetch";

export const MoveList = ({ apiPath }) => {
  const [show, setShow] = useState(false);

  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <div className="">
        {show ? (
          <MoveDetails />
        ) : (
          <div className="flex flex-wrap gap-4">
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => setShow(true)}>
                <Card movie={movie}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
