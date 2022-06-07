import React, { useState } from "react";

interface ToppingsComponent {
  image: string;
  name: string;
}

const OrderToppings: React.FC<ToppingsComponent> = ({ image, name }) => {
  const [style, setStyle] = useState("toppings-container");
  const [active, setActive] = useState(false);

  const clickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (active) {
      setStyle("toppings-container");
      setActive(false);
    } else {
      setStyle("toppings-container toppings-container__selected");
      setActive(true);
    }
  };

  return (
    <div className={style} onClick={clickHandler}>
      <div className="icon-container">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default OrderToppings;
