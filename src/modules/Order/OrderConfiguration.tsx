import React from "react";
import Navbar from "../../components/Navbar";
import OrderCheck from "./components/OrderCheck";
import OrderToppings from "./components/OrderToppings";
import { PizzaSize } from "./components/PizzaSize";
import { getToppings } from "../Mocks/ToppingsData";
import { extraPrice } from "./state/atoms";
import { useRecoilValue } from "recoil";
import { Discount } from "./components/Discount";
type Props = {};

const OrderConfiguration = (props: Props) => {
  const price = useRecoilValue(extraPrice);
  const toppings = getToppings();

  return (
    <main>
      <Navbar />
      <div className="container mx-auto flex flex-col justify-center items-center">
        <p className="text-4xl my-10 text-center">Toppings! Toppings!</p>
        <div className="flex justify-center gap-4">
          {toppings.map((t) => OrderToppings(t))}
        </div>
        <p className="price-extra">Total price +${price}</p>
        <PizzaSize />
        <Discount />
        <OrderCheck />
      </div>
    </main>
  );
};

export default OrderConfiguration;
