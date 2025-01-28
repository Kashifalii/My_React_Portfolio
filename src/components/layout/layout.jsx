import React from "react";
import Navbar from "../pages/Navbar";
import Header from "../pages/Header";
import styles from "../layout/layout.module.css";

function Layout() {
  return (
    <div className="relative flex w-full h-screen">
      <div className="sideBar bg-yellow-400 min-h-full w-[200px] overflow-auto">
        <Navbar />
      </div>
      <main
        className={`${styles.main} flex-1 min-h-full flex flex-col px-[50px]`}
      >
        <Header />
      </main>
    </div>
  );
}

export default Layout;
