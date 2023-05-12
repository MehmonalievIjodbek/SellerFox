import React from "react";
import GolichkaIcon from "../icons/Golichka-icon";

const InsideCard = () => {
  const insideCard = [
    {
      id: 1,
      src: <GolichkaIcon />,
      title: "ТОП продаж товаров на маркетплейсах UZUM",
      desc: "Лидеры по объему выручки и заказам среди всех товаров.      ",
    },
    {
      id: 2,
      src: <GolichkaIcon />,
      title: "Детализация любого товара      ",
      desc: "Данные по числу продаж, стоимости и остатках конкретных позиций на складах. Схема работы, средний чек и выручка продавца от продажи товара за нужный период.      ",
    },
    {
      id: 3,
      src: <GolichkaIcon />,
      title: "Динамика брендов и продавцов      ",
      desc: "Данные о продажах в разрезе отдельных брендов и продавцов по маркетплейсам UZUM.      ",
    },
    // {
    //   id: 4,
    //   src: <GolichkaIcon />,
    //   title: "Доступное представление данных      ",
    //   desc: "В виде графиков и диаграмм. Табличные данные можно отфильтровать и скачать в xls и csv.      ",
    // },
  ];
  return (
    <>
      <div className="inside">
        <p className="title-p">ЧТО ВНУТРИ</p>
        <h3 className="desc-t">Возможности Kattapult</h3>
        <div className="inside-cards">
          <div className="inside-card">
            <div className="inside-card__text">
              <div>
                {insideCard.map((item) => (
                  <div className="insCard-text">
                    <h6>{item.src}</h6>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="inside-card__img">
              <img src="/img/nout.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideCard;
