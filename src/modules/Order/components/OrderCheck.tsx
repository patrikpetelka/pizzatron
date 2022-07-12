import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../../assets/logo.svg";
import { totalPrice } from "../state/totalPrice";
import { useRecoilValue } from "recoil";

type Props = {};

const OrderCheck = (props: Props) => {
  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    navigate("/order-details");
  };
  const price = useRecoilValue(totalPrice);

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
          <p className="price">{price}</p>
          <p className="text-secondary">Order Total</p>
        </div>
      </div>
      <div className="">
        <button className="text-white font-medium" onClick={onClick}>
          Buy Pizza! Pizza!
        </button>
      </div>
    </div>
  );
};

export default OrderCheck;
