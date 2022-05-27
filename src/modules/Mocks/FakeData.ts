import bacon from "../../assets/icons/bacon.png";
import chilli from "../../assets/icons/chilli.png";
import corn from "../../assets/icons/corn.png";
import egg from "../../assets/icons/egg.png";
import pineapple from "../../assets/icons/pineapple.png";
import shrooms from "../../assets/icons/shrooms.png";
import meat from "../../assets/icons/meat.png";

export const getToppings = () => {
  return [
    { name: "Chilli", image: chilli },
    { name: "Corn", image: corn },
    { name: "Egg", image: egg },
    { name: "Pineapple", image: pineapple },
    { name: "Meat", image: meat },
    { name: "Shrooms", image: shrooms },
    { name: "Bacon", image: bacon },
  ];
};
