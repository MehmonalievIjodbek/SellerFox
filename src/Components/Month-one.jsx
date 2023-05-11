import React from "react";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const MonthOne = (props) => {
  const { func } = props;
  return (
    <>
      <div className="price-card__month">
        {func?.map((item) => (
          <motion.div
            className="box month"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div>
              <h2>{item.text}</h2>
              <div className="month-price">
                <p>{item.label}</p>
                <span>{item.label2}</span>
              </div>
              <h3>{item.desc}</h3>
              <div className="month-icon">
                <CalendarOutlined />
                <h5>{item.icon}</h5>
              </div>
              <div className="month-icon">
                <UserOutlined />
                <h5>{item.icon1}</h5>
              </div>
              <div className="month-button">
                <button>{item.button}</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MonthOne;
