import React from "react";
import backup from "../assets/images/backup.png";
export const Card = ({ title, image, overview }) => {
  return (
    <>
      <div className="w-100 rounded-2xl  m-auto  mt-5 border border-white-1 h-240 ">
        <div className="w-99 m-auto rounded-t-2xl  overflow-hidden ">
          <img src={image} />
        </div>
        <div className="p-3">
          <h2 className="text-3xl font-bold mt-3 mb-3">{title}</h2>
          <p className="pb-2">
            {overview}
          </p>
        </div>
      </div>
    </>
  );
};
