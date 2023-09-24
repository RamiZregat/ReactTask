import React from "react";
import Statistics from "./Statistics";
import YourFavorites from "./YourFavorites";
import "./dashboard.css";

export default function index() {
  return (
    <div className="px-8">
      <Statistics />
      <YourFavorites />
    </div>
  );
}
