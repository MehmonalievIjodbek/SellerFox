import React from "react";
import YandexIcon from "../icons/Yandex-market-icon";
import AliExspressIcon from "../icons/AliExspress-icon";
import WildBerriesIcon from "../icons/WildBerries-icon";
import OzonIcon from "../icons/Ozon-icon";
import KazanIcon from "../icons/Kazan-icon";
import SberMarketIcon from "../icons/Sber-market-icon";
import ChromeIcon from "../icons/Chrome-icons";

const Brand = () => {
  const brands = [
    {
      id: 1,
      img: <YandexIcon />,
    },
    {
      id: 2,
      img: <AliExspressIcon />,
    },
    {
      id: 3,
      img: <WildBerriesIcon />,
    },
    {
      id: 4,
      img: <OzonIcon />,
    },
    {
      id: 5,
      img: <KazanIcon />,
    },
    {
      id: 6,
      img: <SberMarketIcon />,
    },
    {
      id: 7,
      img: <ChromeIcon />,
    },
  ];
  return (
    <>
      <div className="brands">
        {brands.map((item) => (
          <div key={item.id}>{item.img}</div>
        ))}
      </div>
    </>
  );
};

export default Brand;
