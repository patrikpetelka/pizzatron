import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../../assets/logo.svg";
import { totalPrice } from "../state/totalPrice";
import { useRecoilValue } from "recoil";
import { useSetRecoilState, useRecoilState } from "recoil";
import { qty } from "../state/atoms";
import { useState } from "react";

type Props = {};

const OrderCheck = (props: Props) => {
  const navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setQtyState(qtyValue);
    navigate("/order-details");
  };
  const price = useRecoilValue(totalPrice);
  const setQtyState = useSetRecoilState(qty);
  const qtyState = useRecoilState(qty);
  const [qtyValue, setQtyValue] = useRecoilState(qty);
  return (
    <div className="order-check flex justify-around items-center mt-24">
      <div className="mb-20">
        <MyLogo className="" />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <input
            type="number"
            id="qty"
            name="quantity"
            value={qtyValue}
            maxLength={1}
            onFocus={(e) => e.target.select()}
            onChange={(e) => setQtyValue(Number(e.target.value))}
          />

          <p className="text-center text-secondary">Qty</p>
        </div>
        <div className="line"></div>
        <div className="price-group">
          <p className="price">$ {price}</p>
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
