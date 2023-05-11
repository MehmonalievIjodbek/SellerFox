import React, { useState } from "react";
import { Steps } from "antd";
import TelegramIcon from "../icons/Telegram";
import GolichkaRed from "../icons/Golichka-red-icons";
import MonthOne from "./Month-one";
import { motion } from "framer-motion";
import AliExspressIconPrice from "../icons/AliExspress-Icon-price";
import OzonPriceIcon from "../icons/Ozon-price-icons";
import WbIcons from "../icons/Wb-icons";
import GoogleIcon from "../icons/Google-icons";

const PriceCard = () => {
  const [current, setCurrent] = useState(0);

  const unlimited = [
    {
      id: 1,
      holichka: <GolichkaRed />,
      title: "Анализ маркетплейсов",
      icons: [
        {
          id: 1,
          icons: <AliExspressIconPrice />,
        },
        {
          id: 2,
          icons: <OzonPriceIcon />,
        },
        {
          id: 3,
          icons: <WbIcons />,
        },
      ],
    },
    {
      id: 2,
      holichka: <GolichkaRed />,
      title: "Частота мониторинга      ",
      desc: "До 2500 запросов в сутки      ",
      icons: false,
    },
    {
      id: 3,
      holichka: <GolichkaRed />,
      title: "Период выборки данных",
      desc: "30 дней      ",
      icons: false,
    },
    {
      id: 4,
      holichka: <GolichkaRed />,
      title: "Данные доступны      ",
      desc: "365 дней      ",
      icons: false,
    },
  ];

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
          <p>Только до 5 июня СКИДКА на ВСЕ ТАРИФЫ от</p>
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
              <p>0 UZS</p>
            </div>
            <div className="test-card__center">
              <p>
                <span>1 час</span>
                для всех пользователей
              </p>
              {/* <p>
                <span>24 часа</span>
                при подключении Api Ozon или Wildberries
              </p> */}
            </div>
            <div className="test-card__right">
              <button>ВЫБРАТЬ</button>
            </div>
          </div>
          <div>{steps[current].content}</div>
        </div>
        <div className="contactPrice">
          <p>
            Ура! Теперь можно пользоваться SellerFox с{" "}
            <span>беспроцентной рассрочкой!</span> Зарабатывай с SellerFox еще
            выгоднее.*
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <h3>
              *Рассрочка действует для тарифов сроком от 1 месяца, скидки не
              суммируются! По вопросам рассрочки обращаться
            </h3>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              {" "}
              <TelegramIcon /> PSS
            </a>
          </div>
        </div>
        <div className="unlimited">
          {unlimited.map((item) => (
            <>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "start",
                  }}
                >
                  {item.holichka}
                  <div>
                    <p>{item.title}</p>
                    <h3>{item.desc}</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {item?.icons &&
                        item?.icons.map((ico) => (
                          <div key={ico.id}>{ico.icons}</div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="unlimited-card">
          <GoogleIcon />
          <p>Доступен плагин для анализа маркетплейсов в браузере</p>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
