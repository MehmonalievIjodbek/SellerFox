import React from "react";
import YandexIcon from "../icons/Yandex-market-icon";
import AliExspressIcon from "../icons/AliExspress-icon";
import WildBerriesIcon from "../icons/WildBerries-icon";
import OzonIcon from "../icons/Ozon-icon";
import KazanIcon from "../icons/Kazan-icon";
import SberMarketIcon from "../icons/Sber-market-icon";
import ChromeIcon from "../icons/Chrome-icons";
import { motion } from "framer-motion";

const Brand = () => {
  const brands = [
    // {
    //   id: 1,
    //   img: <YandexIcon />,
    // },
    // {
    //   id: 2,
    //   img: <AliExspressIcon />,
    // },
    // {
    //   id: 3,
    //   img: <WildBerriesIcon />,
    // },
    {
      id: 1,
      img: <OzonIcon />,
    },
    // {
    //   id: 5,
    //   img: <KazanIcon />,
    // },
    // {
    //   id: 6,
    //   img: <SberMarketIcon />,
    // },
    // {
    //   id: 7,
    //   img: <ChromeIcon />,
    // },
  ];
  return (
    <>
      <div className="brands">
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
          {brands.map((item) => (
            <div key={item.id}>

              {item.img}
              
              </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Brand;
