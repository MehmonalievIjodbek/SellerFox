import React from "react";

const MenuFooterMobile = () => {
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
    <>
      <div className="menuFooter-mobile">
        <ul>
          {header.map((item) => (
            <div key={item.id}>
              <li>{item.label}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuFooterMobile;
