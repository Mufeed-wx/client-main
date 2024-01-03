import React from "react";
import sty from "./style.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={sty.sidebar_main_section}>
      <ul className={sty.sidebat_items}>
        <li className={sty.sidebar_item}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={sty.sidebar_item}>
          <Link to="/employees">Employeers</Link>
        </li>
        <li className={sty.sidebar_item}>
          <Link to="/payments">Payments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
