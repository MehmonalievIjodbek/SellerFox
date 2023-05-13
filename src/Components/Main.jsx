import React from "react";
import MainChartLeft from "../icons/Main-chart-left";
import MainChartRight from "../icons/Main-chart-right";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="service" className="main">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <MainChartLeft />
      </motion.div>

      <div className="main-box">
        <p>Kattapult</p>
        <h1>Сервис аналитики для умных продавцов</h1>
        <h6>Анализируйте конкурентов. Увеличивайте свои продажи с умом.</h6>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Попробуйте</button>
        </div>
      </div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <MainChartRight />
      </motion.div>
    </div>
  );
};

export default Main;
