import React from "react";
import Navbar from "../pages/Navbar";

function Layout() {
  return (
    <div className="relative flex w-full h-screen">
      <div className="sideBar bg-yellow-400 min-h-full w-[200px] overflow-auto">
        <Navbar />
      </div>
      <main className="flex-1 min-h-full flex flex-col" />
    </div>
  );
}

export default Layout;
