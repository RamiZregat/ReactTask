import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import "react-circular-progressbar/dist/styles.css";
import "./dashboard.css";

export default function Statistics() {
  return (
    <>
      <h1 className="sectionTitle">Your dashboard</h1>
      <div className=" grid xl:grid-rows-1 md:grid-rows-2 md:grid-flow-col justify-items-stretch gap-6 my-6">
        <div className="statisticContainer flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div className="font-bold text-xl textColorFifth">Todays sales</div>
            <div className="font-bold text-2xl textColorFourth">2,456</div>
          </div>
          <div className="w-24 h-24 my-4 firstCPB">
            <CircularProgressbarWithChildren
              value={66}
              styles={{
                root: {
                  transform: "rotate(90deg)",
                },
              }}
            >
              <BiTrendingUp color="#44c13c" className="text-3xl" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="statisticContainer flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div className="font-bold text-xl textColorFifth">New Products</div>
            <div className="font-bold text-2xl textColorFourth">221</div>
          </div>
          <div className="w-24 h-24 my-4 secondCPB">
            <CircularProgressbarWithChildren
              value={66}
              styles={{
                root: {
                  transform: "rotate(90deg)",
                },
              }}
            >
              <MdArrowRightAlt color="#4040f2" className="text-3xl" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="statisticContainer flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div className="font-bold text-xl textColorFifth">Inventory</div>
            <div className="font-bold text-2xl textColorFourth">1,425</div>
          </div>
          <div className="w-24 h-24 my-4 thirdCPB">
            <CircularProgressbarWithChildren value={45}>
              <BiTrendingDown color="#ff513a" className="text-3xl" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </>
  );
}
