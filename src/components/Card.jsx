import React from "react";
import { Link } from "react-router-dom";
import backup from "../assets/images/backup.png";
export const Card = ({movie}) => {
  const {id , title,overview,poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backup;
  return (
    <>
     <Link to={`/movie/${id}`}>
      <div className="w-full sm:w-80 md:w-96  rounded-2xl  m-auto  mt-5 border border-white-1 h-240 ">
        <div className="w-full  rounded-t-2xl  overflow-hidden ">
          <img src={image} className="w-full rounded-xl"/>
        </div>
        <div className="p-3">
          <h2 className="text-xl font-bold mt-3">{title}</h2>
          <p className="sm:text-sm text-xs mt-2">
            {overview}
          </p>
        </div>
      </div>
      </Link>
    </>
  );
};
