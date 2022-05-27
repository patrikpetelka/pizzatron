import React from "react";

interface ToppingsComponent{
    image: string;
    name: string;
}

const OrderToppings: React.FC<ToppingsComponent> = ({
    image,
    name
}) => {
  return (
      <div className="toppings-container">
          <div className="icon-container"><img src={image} alt="" /></div>
          <p>{name}</p>
    </div>
  );
};

export default OrderToppings;
