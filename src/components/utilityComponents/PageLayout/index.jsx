import React from "react";
import SideBar from "../SideBar";

export default function PageLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="mt-6 container mx-auto">{children}</div>
    </div>
  );
}
