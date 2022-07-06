import React, { useState } from "react";
import { useRecoilState, atom } from "recoil";
import { extraPrice } from "../atoms/extraPrice";

interface ToppingsComponent {
  image: string;
  name: string;
  price: number;
}

const OrderToppings: React.FC<ToppingsComponent> = ({ image, name, price }) => {
  const [style, setStyle] = useState("toppings-container");
  const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useRecoilState(extraPrice);

  const clickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (active) {
      setStyle("toppings-container");
      setActive(false);
      setTotalPrice(totalPrice - price);
    } else {
      setStyle("toppings-container toppings-container__selected");
      setActive(true);
      setTotalPrice(totalPrice + price);
    }
    return totalPrice;
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
