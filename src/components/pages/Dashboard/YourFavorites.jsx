import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  MdOutlineLocationOn,
  MdOutlineViewCarousel,
  MdOutlineBusiness,
} from "react-icons/md";
import { YFMockedData } from "./yourFavoritesData.js";

export default function YourFavorites() {
  const [filteredData, setFilteredData] = useState(YFMockedData);

  const handleSearchInputChanges = (e) => {
    setFilteredData(
      YFMockedData.filter((data) => {
        return data.title.toLowerCase().includes(e.target.value.toLowerCase());
      }),
    );
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-y-4 justify-between py-6">
        <h1 className="sectionTitle ">Your favorites</h1>
        <label className="relative block">
          <div className="flex items-center pl-1 pr-4 py-2 border border-gray-300 rounded-3xl">
            <input
              onChange={(e) => handleSearchInputChanges(e)}
              className="md:w-64 sm:w-28 w-20 placeholder:text-gray-300 placeholder:text-lg focus:outline-none block w-full py-1 pl-4 sm:text-sm"
              placeholder="Try‘Miami beachhouse’"
              type="text"
              name="search"
            />
            <span className="">
              <BiSearchAlt2 color="#242d35" className="text-xl ml-2" />
            </span>
          </div>
        </label>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 md:grid-flow-row justify-items-stretch gap-6">
        {filteredData.map((data) => (
          <div key={data.id} className="border border-gray-200 rounded-2xl">
            <div className="YFCards p-7 flex flex-col gap-4">
              <img
                className="w-full h-52 object-cover rounded-2xl"
                src={data.img}
                alt="cardImage"
              />
              <div className="font-bold text-xl textColorFifth mt-2">
                {data.title}
              </div>
              <p className="text-gray-500 text-base">{data.description}</p>
              <div className="flex flex-row gap-3 my-3">
                <span className="flex flex-row gap-2 items-center text-gray-500">
                  <MdOutlineLocationOn />
                  <p>{data.location}</p>
                </span>
                <span className="flex flex-row gap-2 items-center text-gray-500">
                  <MdOutlineViewCarousel />
                  <p>{data.bedrooms}</p>
                </span>
                <span className="flex flex-row gap-2 items-center text-gray-500">
                  <MdOutlineBusiness />
                  <p>{data.building}</p>
                </span>
              </div>
              <button className="rounded-full border border-gray-200 p-4 font-medium hover:bg-gray-100">
                View listing details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
