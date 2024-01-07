import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import sty from "./style.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={sty.main_container}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
