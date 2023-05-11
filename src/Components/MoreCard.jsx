import React, { useState } from "react";
import GolichkaIconsGreen from "../icons/Golichka-Green-icons";

const MoreCard = () => {
  const [btnId, setBtnId] = useState(1);

  const moreCard1 = [
    {
      id: 1,
      label:
        "Оценим рынок по количеству продавцов в узконаправленной части отдельного сегмента рынка      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 2,
      label:
        "Предоставим информацию о соотношении активных и пассивных продавцов        ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 3,
      label: "Определим приоритетную модель продаж      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 4,
      label: "Выгрузим ассортимент ТОП-3 продавцов в рыночной нише      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 5,
      label: "Предоставим выводы и рекомендации      ",
      src: <GolichkaIconsGreen />,
    },
  ];

  const moreCard2 = [
    {
      id: 1,
      label: "Отразим основные финансовые показатели в нише",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 2,
      label:
        "Оценим предпочтения покупателей в разрезе «брендовый» и «небрендованый» товар      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 3,
      label: "Сравним товар на разных маркетплейсах      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 4,
      label: "Проведем аналитику конкурентных цен по товару",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 5,
      label: "Предоставим выводы и рекомендации",
      src: <GolichkaIconsGreen />,
    },
  ];

  const moreCard3 = [
    {
      id: 1,
      label: "Проанализируем представленность бренда на разных маркетплесах",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 2,
      label: "Сравним продажи бренда на разных маркетплейсах        ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 3,
      label: "Предоставим ТОП-50 товаров лидеров      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 4,
      label: "Определим доли продавцов занимающихся брендом      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 5,
      label: "Проведем аналитику конкурентных брендов по товару      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 6,
      label: "Отразим продажи по ценовым сегментам      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 7,
      label: "Предоставим выводы и рекомендации      ",
      src: <GolichkaIconsGreen />,
    },
  ];

  const moreCard4 = [
    {
      id: 1,
      label:
        "Проведем анализ в ценовой сегментации в выбранной вами ниши (категории)      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 2,
      label: "Предоставим выгрузку Топ-100 товаров в категории",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 3,
      label:
        "    Выполним анализ основных продавцов в выбранной ценовой категории      ",
      src: <GolichkaIconsGreen />,
    },
    {
      id: 4,
      label: "Предоставим выводы и рекомендации      ",
      src: <GolichkaIconsGreen />,
    },
  ];

  return (
    <div>
      <p className="title-p">ЧТО ЕЩЁ</p>
      <h3
        className="desc-t"
        style={{ marginBottom: "20px", maxWidth: "1000px", width: "100%" }}
      >
        Нет желания заниматься аналитикой?
      </h3>

      <h6
        className="desc-d"
        style={{
          marginBottom: "20px",
          maxWidth: "416px",
          lineHeight: "24px",
          width: "100%",
        }}
      >
        Мы подготовим для Вас аналитические отчёты на основе сервиса SellerFox
      </h6>

      <div className="moreCard">
        <div className="moreCard-left">
          <div
            className={btnId === 1 ? "btn-active" : ""}
            onClick={() => setBtnId(1)}
          >
            <div className="moreCard-left__cards">
              <img src="/img/moreCard1.png" alt="" />
              <h2>Отчет по продавцам</h2>
            </div>
          </div>
          <div
            className={btnId === 2 ? "btn-active " : ""}
            onClick={() => setBtnId(2)}
          >
            <div className="moreCard-left__cards">
              <img src="/img/moreCard2.png" alt="" />
              <h2>Отчет по товарам</h2>
            </div>
          </div>
          <div
            className={btnId === 3 ? "btn-active" : ""}
            onClick={() => setBtnId(3)}
          >
            <div className="moreCard-left__cards">
              <img src="/img/moreCard3.png" alt="" />
              <h2>Отчет по брендам</h2>
            </div>
          </div>
          <div
            className={btnId === 4 ? "btn-active" : ""}
            onClick={() => setBtnId(4)}
          >
            <div className="moreCard-left__cards">
              <img src="/img/moreCard4.png" alt="" />
              <h2>Отчет по ценам</h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            {btnId === 1 ? (
              <div>
                {moreCard1.map((item) => (
                  <div className="moreCard-right" key={item.id}>
                    <p>{item.src}</p>
                    <h3>{item.label}</h3>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {btnId === 2 ? (
              <div>
                {moreCard2.map((item) => (
                  <div className="moreCard-right" key={item.id}>
                    <p>{item.src}</p>
                    <h3>{item.label}</h3>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {btnId === 3 ? (
              <div>
                {moreCard3.map((item) => (
                  <div className="moreCard-right" key={item.id}>
                    <p>{item.src}</p>
                    <h3>{item.label}</h3>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {btnId === 4 ? (
              <div>
                {moreCard4.map((item) => (
                  <div className="moreCard-right" key={item.id}>
                    <p>{item.src}</p>
                    <h3>{item.label}</h3>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
