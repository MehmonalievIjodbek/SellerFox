import React from "react";
import MainChartLeft from "../icons/Main-chart-left";
import MainChartRight from "../icons/Main-chart-right";

const Main = () => {
  return (
    <div className="main">
      <MainChartLeft />
      <div className="main-box">
        <p>SellerFox</p>
        <h1>Сервис аналитики для хитрых продавцов</h1>
        <h6>Анализируйте конкурентов. Увеличивайте свои продажи с умом.</h6>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Попробуйте Бесплатно</button>
        </div>
      </div>
      <MainChartRight />
    </div>
  );
};

export default Main;
