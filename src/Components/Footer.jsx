import React from "react";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-card">
          <div>
            <img src="/img/logo.png" alt="" />
          </div>
          <p>Сервис парсинга и анализа конкурентов на маркетплейсах</p>
          <div>
            <div className="footer-contact">
              <PhoneOutlined className="footer-icons"/>
              <div className="footer-number">
                <a href="/">+99890 000 00 00</a>
                <a href="/">+99890 000 00 00</a>
              </div>
            </div>
            <div className="footer-contact">
              <MessageOutlined className="footer-icons" />
              <a href="/">support@kattault.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
