import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/styles.css";

import { Pagination, Navigation } from "swiper";

const BeginCarousel = () => {
  const beginCard = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/fco5y0MxdNE",
      title: "Урок 1. Кому и для чего нужна аналитика",
      desc: "Что такое аналитика данных маркетплейсов, зачем продавцу собирает информацию о чужих продажах и выручке. Вы узнаете какие данные о товарах и конкурентах можно собрать с помощью сервиса Kattapult и поймете как использовать их для планирования ваших закупок, отгрузок и продаж.",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/DAq0gG1MUQg",
      title: "Урок 2. Интерфейс сервиса внешней аналитики",
      desc: "Вы узнаете какие инструменты можно использовать для сбора данных и за что отвечает каждый из них. Функционал каждого элемента интерфейса подробно описан, чтобы вы могли научиться работать с ними просто повторяя действия шаг за шагом.",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/Vxf9_7I2Y6E",
      title: "Урок 3. Пресеты сервиса аналитики Kattapult",
      desc: "Пресеты - наборы предустановленных фильтров, которые в несколько кликов формируют нужную пользователю аналитическую таблицу. В этом видео мы расскажем о функционале каждого пресета, чтобы вы могли понять какой пригодится именно вам.",
    },
  ];
  return (
    <>
      <div className="begin-carousel">
        <p className="title-p">С ЧЕГО НАЧАТЬ</p>
        <h3 className="desc-t">Обзор функций</h3>
        <Swiper
          navigation={true}
          style={{ height: "330px" }}
          modules={[Pagination, Navigation]}
          className="mySwiper swiper-begin"
        >
          {beginCard.map((item) => (
            <SwiperSlide>
              <div className="begin-carousel__card">
                <iframe
                  width="560"
                  height="315"
                  src={item.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BeginCarousel;
