import React from "react";
import { ReactComponent as MyLogo } from "../../../assets/logo.svg";

type Props = {};

const OrderCheck = (props: Props) => {
  return (
    <div className="order-check flex justify-around items-center mt-24">
      <div className="mb-20">
        <MyLogo className="" />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <input type="number" id="qty" name="quantity" value="1" />
          <p className="text-center text-secondary">Qty</p>
        </div>
        <div className="line"></div>
        <div className="price-group">
          <p className="price">22.50$</p>
          <p className="text-secondary">Order Total</p>
        </div>
      </div>
      <div className="">
        <button className="text-white font-medium">Buy Pizza! Pizza!</button>
      </div>
    </div>
  );
};

export default OrderCheck;
