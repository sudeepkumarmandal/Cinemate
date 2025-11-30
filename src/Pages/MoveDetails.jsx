import React from "react";
import backup from "../assets/images/backup.png";
export const MoveDetails = () => {
  return (
    <>
      <div className="flex">
        {/* left img */}
        <div className="w-350 h-145 mt-8">
          <img src={backup} alt="demo" className="w-full h-full rounded-2xl"/>
        </div>
        {/* right  text*/}
        <div className="ml-30 mt-8">
          <h1 className="font-bold text-4xl mb-5 mt-5">Zootopia 2</h1>
          <p className="">
            After cracking the biggest case in Zootopia's history, rookie cops
            Judy Hopps and Nick Wilde find themselves on the twisting trail of a
            great mystery when Gary De’Snake arrives and turns the animal
            metropolis upside down. To crack the case, Judy and Nick must go
            undercover to unexpected new parts of town, where their growing
            partnership is tested like never before.
          </p>
          <div className="mt-12 mb-10 [&>span:hover]:bg-gray-700">
            <span className="bg-gray-100 p-2 border border-black-1 rounded  text-black m-2 ">
              Animation
            </span>
            <span className="bg-gray-100 p-2 border border-black-1 rounded text-black m-2">
              Family
            </span>
            <span className="bg-gray-100 p-2 border border-black-1 rounded text-black m-2">
              Comedy
            </span>
            <span className="bg-gray-100 p-2 border border-black-1 rounded text-black m-2">
              Adventure
            </span>
            <span className="bg-gray-100 p-2 border border-black-1 rounded text-black m-2">
              Mystery
            </span>
          </div>
          <div className="[&>p]:mb-5">
            <p>⭐ 7.612 134 reviews</p>
            <p><b>Runtime:</b>107 min.</p>
            <p><b>Budget:</b>180000000</p>
            <p><b>Revenue:</b>233000000.</p>
            <p><b>Release Date:</b>2025-11-26</p>
            <p><b>IMDB Code:</b>tt26443597</p>
          </div>
        </div>
      </div>
    </>
  );
};
