import React from "react";
import ArrowRightIcons from "../icons/Arrow-right-icons";

const OfferCard = () => {
  const offer = [
    {
      id: 1,
      title: "Парсинг маркетплейса, которого нет в Kattapult ",
      icons: <ArrowRightIcons />,
    },
    {
      id: 2,
      title:
        "Получение уникальной информации, недоступной для сбора базовыми возможностями Kattapult.      ",
      icons: <ArrowRightIcons />,
    },
    {
      id: 3,
      title: "Агрегация и предоставление данных в необходимом мне виде      ",
      icons: <ArrowRightIcons />,
    },
  ];
  return (
    <div className="offer-container">
      <p className="title-p">ПРЕДЛОЖИМ РЕШЕНИЕ</p>
      <h3
        className="desc-t"
        style={{ marginBottom: "20px", maxWidth: "1000px", width: "100%" }}
      >
        У Вас особенный запрос?
      </h3>
      <div className="offer">
        <div>
          {offer.map((item) => (
            <div className="offer-card">
              <div
                key={item.id}
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <span>{item.icons}</span> <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>
            Мы специализируемся на парсинге интернет-сайтов уже несколько лет и
            сможем выполнить большинство задач, которые могут стоять перед Вами.
          </h3>
          <h3>
            Сформулируйте свой запрос на почту{" "}
            <a href="/">support@kattapult.ru</a> и мы обязательно предложим Вам
            решение.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
