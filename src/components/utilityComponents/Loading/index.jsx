import React from "react";
import logoImage from "../../../assets/images/logoImage.png";

export default function index() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <img src={logoImage} alt="loading" width={500} />
      <div className="spinner-border mt-5" role="status">
        <span className="sr-only" />
      </div>
    </div>
  );
}
