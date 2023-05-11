import React, { useState } from "react";
import { Popover, Steps } from "antd";
import MonthOne from "./Month-one";
import { motion } from "framer-motion";

const PriceCard = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const monthOne = [
    {
      id: 1,
      text: "Стандарт",
      label: "6 499₽",
      label2: "7 799₽",
      desc: "% Есть рассрочка",
      icon: "1 месяц",
      icon1: "1 пользователь",
      button: "ВЫБРАТЬ",
    },
    {
      id: 2,
      text: "Профессиональный",
      label: "9 890₽",
      label2: "11 890₽",
      desc: "% Есть рассрочка",
      icon: "1 месяц",
      icon1: "5 пользователей",
      button: "ВЫБРАТЬ",
    },
  ];

  const monthTwo = [
    {
      id: 1,
      text: "Стандарт",
      label: "17 499₽",
      label2: "20 999₽      ",
      desc: "% Есть рассрочка",
      icon: "3 месяц",
      icon1: "1 пользователь",
      button: "ВЫБРАТЬ",
    },
    {
      id: 2,
      text: "Профессиональный",
      label: "26 890₽      ",
      label2: "32 511₽      ",
      desc: "% Есть рассрочка",
      icon: "3 месяц",
      icon1: "5 пользователей",
      button: "ВЫБРАТЬ",
    },
  ];

  const monthThree = [
    {
      id: 1,
      text: "Стандарт",
      label: "32 125₽      ",
      label2: "38 550₽      ",
      desc: "% Есть рассрочка",
      icon: "6 месяц",
      icon1: "1 пользователь",
      button: "ВЫБРАТЬ",
    },
    {
      id: 2,
      text: "Профессиональный",
      label: "51 173₽      ",
      label2: "61 408₽      ",
      desc: "% Есть рассрочка",
      icon: "6 месяц",
      icon1: "5 пользователей",
      button: "ВЫБРАТЬ",
    },
  ];

  const monthFour = [
    {
      id: 1,
      text: "Стандарт",
      label: "60 470₽      ",
      label2: "72 564₽      ",
      desc: "% Есть рассрочка",
      icon: "12 месяц",
      icon1: "1 пользователь",
      button: "ВЫБРАТЬ",
    },
    {
      id: 2,
      text: "Профессиональный",
      label: "96 325₽      ",
      label2: "115 590₽      ",
      desc: "% Есть рассрочка",
      icon: "12 месяц",
      icon1: "5 пользователей",
      button: "ВЫБРАТЬ",
    },
  ];

  const steps = [
    {
      title: <p className="step-text">1 месяца</p>,
      content: (
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
          <MonthOne func={monthOne} />
        </motion.div>
      ),
    },
    {
      title: <p className="step-text">3 месяца</p>,
      content: <MonthOne func={monthTwo} />,
    },
    {
      title: <p className="step-text">6 месяцев</p>,
      content: (
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
          <MonthOne func={monthThree} />
        </motion.div>
      ),
    },
    {
      title: <p className="step-text">12 месяцев</p>,
      content: <MonthOne func={monthFour} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <div className="price-card">
        <p className="title-p">СКОЛЬКО СТОИТ</p>
        <h3
          className="desc-t"
          style={{ marginBottom: "20px", maxWidth: "1000px", width: "100%" }}
        >
          Выберите свой тариф{" "}
        </h3>
        <div className="discount">
          <p>Только до 1 сентября СКИДКА на ВСЕ ТАРИФЫ от</p>
          <h3>20%</h3>
        </div>
        <div className="steps">
          <p>Настройте только период доступа</p>

          <Steps
            items={items}
            disabled={false}
            progressDot
            current={current}
            onChange={onChange}
          />

          <div className="test-card">
            <div className="test-card__left">
              <h2>Тестовый</h2>
              <p>0₽</p>
            </div>
            <div className="test-card__center">
              <p>
                <span>1 час</span>
                для всех пользователей
              </p>
              <p>
                <span>24 часа</span>
                при подключении Api Ozon или Wildberries
              </p>
            </div>
            <div className="test-card__right">
              <button>ВЫБРАТЬ</button>
            </div>
          </div>
          <div>{steps[current].content}</div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
