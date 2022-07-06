import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import OrderCheck from "./components/OrderCheck";
import OrderToppings from "./components/OrderToppings";
import { getToppings } from "../Mocks/ToppingsData";
import { extraPrice } from "./atoms/extraPrice";
import { useRecoilValue } from "recoil";
type Props = {};

const OrderConfiguration = (props: Props) => {
  const [discountCode, setDiscountCode] = useState("");
  const price = useRecoilValue(extraPrice);
  const toppings = getToppings();

  const onChange = (e: any) => {
    setDiscountCode(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col justify-center items-center">
        <p className="text-4xl my-10 text-center">Toppings! Toppings!</p>
        <div className="flex justify-center gap-4">
          {toppings.map((t) => OrderToppings(t))}
        </div>
        <p className="price-extra">Total price +${price}</p>
        <p className="text-4xl mt-24 mb-8 text-center">Pizza! Pizza! size</p>
        <div className="box">
          <input type="radio" id="s" name="pizza_size" value="S" />
          <label htmlFor="s">S</label>
          <input type="radio" id="m" name="pizza_size" value="M" />
          <label htmlFor="m">M</label>
          <input type="radio" id="l" name="pizza_size" value="L" />
          <label htmlFor="l">L</label>
        </div>
        <p className="text-4xl mt-20 mb-8 text-center">Get the discount</p>
        <div className="box">
          <form>
            <input
              type="text"
              className="discountInput"
              id="discount"
              value={discountCode}
              placeholder="Enter discount code"
              onChange={onChange}
              background-color="transparent"
            />
          </form>
          <button className="button-secondary">Apply</button>
        </div>
        <OrderCheck />
      </div>
    </>
  );
};

export default OrderConfiguration;
