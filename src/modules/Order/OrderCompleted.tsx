import React from "react";
import { ReactComponent as MyLogo } from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

type Props = {};

const OrderCompleted = (props: Props) => {
  let navigate = useNavigate();
  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    navigate("/order-config");
  };
  return (
    <div className="completed-grid">
      <div className="completed-grid__element1">
        <MyLogo />
      </div>
      <div className="completed-grid__element2">
        <div className="p-10">
          <h1 className="text-5xl font-bold">Your Pizza! Pizza!</h1>
          <h1 className="text-5xl font-bold mb-4">is on its way!</h1>
          <p className="text-xl mb-10 ">
            You should be enjoying your meal in no more than 45 minutes.
          </p>
          <button className="button-another" onClick={onClick}>
            Buy Another!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
