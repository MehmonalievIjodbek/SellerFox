import React from "react";

const MenuFooterMobile = () => {
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
    <>
      <div className="menuFooter-mobile">
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
    </>
  );
};

export default MenuFooterMobile;
