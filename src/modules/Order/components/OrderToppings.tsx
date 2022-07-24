import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { extraPrice, selectStyle } from "../state/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toppingsList } from "../state/atoms";

interface ToppingsComponent {
  image: string;
  name: string;
  price: number;
}
const OrderToppings: React.FC<ToppingsComponent> = ({ image, name, price }) => {
  const [style, setStyle] = useState<string>("toppings-container");
  const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useRecoilState(extraPrice);
  const [toppings, setToppings] = useRecoilState(toppingsList);
  const setToppingsState = useSetRecoilState(toppingsList);

  function removeItemAtIndex(arr: string[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  const index = toppings.findIndex((t) => t === name);

  const ClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (active) {
      setStyle("toppings-container");
      setTotalPrice(totalPrice - price);
      const newlist = removeItemAtIndex(toppings, index);
      setToppingsState(newlist);
      setActive(false);
    } else {
      setStyle("toppings-container toppings-container__selected");
      setTotalPrice(totalPrice + price);
      setToppingsState((toppings) => [...toppings, name]);
      setActive(true);
    }
    console.log(
      toppings.map((name, index) => {
        return " " + name;
      })
    );
  };

  return (
    <div className={style} onClick={ClickHandler}>
      <div className="icon-container">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default OrderToppings;
