import React from "react";
import Navbar from "../../pages/admin/Navbar";
import Sidebar from "../../pages/admin/Sidebar";
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
