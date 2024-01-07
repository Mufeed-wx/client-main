import React from "react";
import sty from "./style.module.css";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <div className={sty.main_container}>
        <div className={sty.showcase}></div>
        <div className={sty.top_box_a}></div>
        <div className={sty.top_box_b}>
            
        </div>
      </div>
    </Layout>
  );
};

export default Home;
