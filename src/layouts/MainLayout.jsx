import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.getElementById("themBody").classList.add("dark");
    } else {
      document.getElementById("themBody").classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="dark:bg-slate-800">
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <div className="min-h-[calc(100vh-220px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
