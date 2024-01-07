import React, { useState } from "react";
import sty from "./style.module.css";
import { Link } from "react-router-dom";
// import "./style.css";
const Sidebar = () => {
  const [sideMenuMinimize, setSideMenuMinimize] = useState("active");
  function handleHiddenbar() {
    setSideMenuMinimize("active");
  }
  return (
    <div className={sty.sidebar_main_section}>
      {sideMenuMinimize === "active" ? "" : ""}{" "}
      <div
        className={`${sty.container} ${sty.side_menu} ${sty.add}`}
        id={sty.container}
      >
        <div className={sty.brand}>
          <a href="#" id={sty.toggle} onClick={handleHiddenbar}>
            <i className="bi bi-list"></i>
          </a>
        </div>
        <div className={sty.navbar}>
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-house"></i>
                <span>DashBoard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-person"></i>
                <span>User</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-chat-right-text"></i>
                <span>Message</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-graph-up-arrow"></i>
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-folder"></i>
                <span>file manager</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-cart"></i>
                <span>Order</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-heart"></i>
                <span>WishList</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-gear"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={sty.navbar}>
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
