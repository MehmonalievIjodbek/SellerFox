import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/styles.css";

import { Pagination, Navigation } from "swiper";

const Advantages = () => {
  const advantagesCard = [
    {
      id: 1,
      title: "Топ категорий",
      desc: "Самые прибыльные категории",
      number: "Пресет #1",
      src: "/img/advantages1.png",
    },
    {
      id: 2,
      title: "Топ товаров",
      desc: "Самые продаваемые товары в категории",
      number: "Пресет #2",
      src: "/img/advantages2.png",
    },
    {
      id: 3,
      title: "Самые быстрорастущие товары",
      desc: "Товары с самым большим приростом продаж и выручки за отчетный период",
      number: "Пресет #3",
      src: "/img/advantages3.png",
    },
    {
      id: 4,
      title: "Самые быстрорастущие категории",
      desc: "Категории, которые выросли в объеме продаж и выручки больше всего",
      number: "Пресет #4",
      src: "/img/advantages4.png",
    },
    {
      id: 5,
      title: "Ниши с минимумом продавцов, где можно начать продажи",
      desc: "Категории с минимальным количеством конкурентов",
      number: "Пресет #5",
      src: "/img/advantages5.png",
    },
    {
      id: 6,
      title: "Самые активные и неактивные категории",
      desc: "Категории, в которых товары продаются хуже или лучше всего",
      number: "Пресет #6",
      src: "/img/advantages6.png",
    },
    {
      id: 7,
      title: "Лучшие сезонные товары",
      desc: "Товары, которые лучше всего показывают себя в определенный период и могут взорвать ваши продажи",
      number: "Пресет #7",
      src: "/img/advantages7.png",
    },
    {
      id: 8,
      title: "Сравнение маркетплейсов",
      desc: "Все площадки на одном графике для быстрого анализа",
      number: "Пресет #8",
      src: "/img/advantages8.png",
    },
  ];
  return (
    <div className="advantages-card" style={{ marginBottom: "150px" }}>
      <p className="title-p"> ПРЕИМУЩЕСТВА</p>
      <h3 className="desc-t" style={{ marginBottom: "20px" }}>
        Экономим Ваше время
      </h3>
      <h6 className="desc-d">
        Мы создали удобные пресеты. Нажимаете кнопку - получаете результат
      </h6>
      <Swiper
        navigation={true}
        style={{ height: "580px" }}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper-begin"
      >
        {advantagesCard.map((item) => (
          <div>
            <SwiperSlide>
              <div className="advantages-card">
                <h6
                  style={{
                    color: "red",
                    fontWeight: "500",
                    textAlign: "start",
                  }}
                >
                  {item.number}
                </h6>
                <h2
                  style={{
                    color: "black",
                    margin: "15px 0 15px 0",
                    fontWeight: "700",
                    textAlign: "start",
                    fontSize: "24px",
                  }}
                >
                  {item.title}
                </h2>
                <p className="advantages-p">{item.desc}</p>
                <div className="advantages-img">
                  <img src={item.src} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Advantages;
