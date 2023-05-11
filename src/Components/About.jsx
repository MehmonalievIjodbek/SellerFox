import React from "react";

const About = () => {
  const aboutData = [
    {
      id: 1,
      number: "1.",
      label:
        "Собственная разработка по обеспечению качественной агрегации данных на сервисе. ",
    },
    {
      id: 2,
      number: "2.",
      label:
        "Ежедневно наши парсеры мониторят 200 млн товаров на 6 маркетплейсах, собирая данные из открытых источников.        ",
    },
    {
      id: 3,
      number: "3.",
      label: "Частотность сбора данных – до одного раза в час.        ",
    },
    {
      id: 4,
      number: "4.",
      label:
        "Вся информация надежно хранится на наших серверах с 2020 года, а пользователям доступны данные за последний год.        ",
    },
    {
      id: 5,
      number: "5.",
      label:
        "Поисковые роботы, которые дополнительно проверяют информацию по особенным и сложным категориям, товарам, продавцам и брендам. ",
    },
  ];
  return (
    <div>
      <p className="title-p">О ДАННЫХ</p>
      <h3
        className="desc-t"
        style={{ marginBottom: "20px", maxWidth: "1000px", width: "100%" }}
      >
        Откуда PSS берёт данные
      </h3>
      <div className="about-card">
        <div>
          {aboutData.map((item) => (
            <div
              style={{
                display: "flex",
                gap: "5px",
                marginBottom: "20px",
              }}
              key={item.id}
            >
              <p>{item.number}</p>
              <h4>{item.label}</h4>
            </div>
          ))}
        </div>
        <img src="/img/ABOUT.png" alt="" />
      </div>
    </div>
  );
};

export default About;
