import React from "react";
import Navbar from "../../components/Navbar";

type Props = {};

const OrderModal = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="container-flex">
        <div className="modal-container"><h1 className="my-4 text-center">Almost done</h1></div>
      </div>
    </div>
  );
};

export default OrderModal;
