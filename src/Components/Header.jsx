import React from "react";
import MenuFooterMobile from "./MenuFooterMobile";

const Header = () => {
  const header = [
    {
      id: 1,
      label: "О сервисе",
    },
    {
      id: 2,
      label: "Возможности",
    },
    {
      id: 3,
      label: "Тарифы",
    },
  ];
  return (
    <div className="header-navbar">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <a href="/">
              <img src="./img/logo.png" alt="" />
            </a>
          </div>
          <div>
            <ul>
              {header.map((item) => (
                <div key={item.id}>
                  <li>{item.label}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
