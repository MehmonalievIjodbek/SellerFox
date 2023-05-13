import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const header = [
    {
      id: 1,
      label: "О сервисе",
      href: "#service",
    },
    {
      id: 2,
      label: "Возможности",
      href: "#vozmojnos",
    },
    {
      id: 3,
      label: "Тарифы",
      href: "#tarif",
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
                  <a href={item.href}>
                    <li>{item.label}</li>
                  </a>
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
