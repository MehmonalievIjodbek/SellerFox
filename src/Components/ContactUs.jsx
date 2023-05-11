import React from "react";

const ContactUs = () => {
  const contactUseOne = [
    {
      id: 1,
      label: "Вы в поиске ниши",
      desc: "Вы новый продавец на маркетплейсе UZUM  и ищете товар, с которого хотите начать продажи.",
      number: "01",
    },
    {
      id: 2,
      label: "Расширяете ассортимент      ",
      desc: "Вы уже продаете на маркетплейсе UZUM и хотите расширить ассортимент.      ",
      number: "02",
    },
  ];
  const contactUseTwo = [
    {
      id: 1,
      label: "Хотите увидеть перспективу ниши      ",
      desc: "Хотите показать партнеру, производителю или дистрибьютору перспективу вашей ниши.      ",
      number: "03",
    },
    {
      id: 2,
      label: "Анализируете конкурентов",
      desc: "Если Вы хотите продавать больше, то можете смотреть, как и сколько продают конкуренты.      ",
      number: "04",
    },
    {
      id: 3,
      label: "Ищете нишу оффлайн      ",
      desc: "Если у Вас свой офлайн магазин — Вы можете следить за трендами через нашу платформу ",
      number: "05",
    },
    {
      id: 4,
      label: "В поиске трендов      ",
      desc: "Если Вы хотите быть в курсе трендов продаж на маркетплейсе UZUM.      ",
      number: "06",
    },
  ];

  return (
    <div className="contact">
      <div className="contact-us">
        <div>
          <p className="title-p">
            ДЛЯ ЧЕГО ВАМ НУЖНО ПОЛЬЗОВАТЬСЯ НАШИМ СЕРВИСОМ
          </p>
          <h2 className="desc-t" style={{ marginBottom: "78px" }}>
            Обращайтесь к нам, если:
          </h2>
          <div className="contact-us__cards">
            {contactUseOne.map((item) => (
              <div className="contact-us__card">
                <span>{item.number}</span>
                <div>
                  <h3>{item.label}</h3>
                  <h4>{item.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-us__cards">
          {contactUseTwo.map((item) => (
            <div className="contact-us__card">
              <span>{item.number}</span>
              <div>
                <h3>{item.label}</h3>
                <h4>{item.desc}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
