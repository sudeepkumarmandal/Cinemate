import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/images/backup.png";
export const MoveDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});
  const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : backup;
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, [id]);
  return (
    <>
      <div className="flex">
        {/* left img */}
        <div className="w-350 h-145 mt-8">
          <img src={image} alt={data.title} className="w-full h-full rounded-2xl" />
        </div>
        {/* right  text*/}
        <div className="ml-30 mt-8">
          <h1 className="font-bold text-4xl mb-5 mt-5">{data.title}</h1>
          <p className="">{data.overview}</p>
          <div className="mt-12 mb-10 [&>span:hover]:bg-gray-700">
             {
              data.genres && data.genres.map((genre) => (
                 <span key={genre.id} className="bg-gray-100 p-2 border border-black-1 rounded  text-black m-2 ">
                  {genre.name}
                </span>
              ))
             }
          </div>
          <div className="[&>p]:mb-5">
            <p>⭐ {data.popularity}</p>
            <p>
             <span className="font-bold mr-2">Runtime: </span> 
             <span>{data.runtime} min.</span>
            </p>
            <p>
              <span className="font-bold  mr-2">Budget: </span> 
              <span>{data.budget}</span>
            </p>
            <p>
             <span className="font-bold  mr-2">Revenue: </span> 
              <span>{data.revenue}</span>
              
            </p>
            <p>
              <span className="font-bold  mr-2">Release Date: </span>
              <span>{data.release_date}</span>
            </p>
            <p>
              <span className="font-bold  mr-2">IMDB Code: </span>
              <span>{data.imdb_id}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
