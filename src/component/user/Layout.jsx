import React from "react";
// import sty from "./style.module.css";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
