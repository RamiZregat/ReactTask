import React from "react";
export default function index() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <h1 className=" flex items-center justify-center font-bold text-6xl textColorPrimary">Investly<div className="textColorSecondary">.</div></h1>
      <div className="spinner-border mt-5" role="status">
        <span className="sr-only" />
      </div>
    </div>
  );
}
