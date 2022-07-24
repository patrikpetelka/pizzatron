import bacon from "../../assets/icons/bacon.png";
import chilli from "../../assets/icons/chilli.png";
import corn from "../../assets/icons/corn.png";
import egg from "../../assets/icons/egg.png";
import pineapple from "../../assets/icons/pineapple.png";
import shrooms from "../../assets/icons/shrooms.png";
import meat from "../../assets/icons/meat.png";
import { toppingsList } from "../Order/state/atoms";

export const getToppings = () => {
  const toppings = [
    {
      name: "Chilli",
      image: chilli,
      price: 1.5,
    },
    { name: "Corn", image: corn, price: 1.5 },
    { name: "Egg", image: egg, price: 1.5 },
    { name: "Pineapple", image: pineapple, price: 2 },
    { name: "Meat", image: meat, price: 2.5 },
    { name: "Shrooms", image: shrooms, price: 1.5 },
    { name: "Bacon", image: bacon, price: 2 },
  ];

  return toppings;
};
