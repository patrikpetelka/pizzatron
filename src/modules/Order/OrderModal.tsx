import React from "react";
import Navbar from "../../components/Navbar";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  discount,
  adressState,
  cityState,
  postalCodeState,
  countyState,
  toppingsList,
} from "./state/atoms";
import { getToppings } from "../Mocks/ToppingsData";
import { totalPrice } from "./state/totalPrice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

interface Topping {
  name: string;
}

function useTopping(toppings: Topping[]) {}

const OrderModal = (props: Props) => {
  let navigate = useNavigate();

  const toppings = useRecoilValue(toppingsList);

  const [adress, setAdress] = useState<string>(useRecoilValue(adressState));

  const setAdressState = useSetRecoilState(adressState);

  const [city, setCity] = useState<string>(useRecoilValue(cityState));

  const setCityState = useSetRecoilState(cityState);

  const [postalCode, setPostalCode] = useState<string>(
    useRecoilValue(postalCodeState)
  );

  const setPostalCodeState = useSetRecoilState(postalCodeState);

  const [county, setCounty] = useState<string>(useRecoilValue(countyState));

  const setCountyState = useSetRecoilState(countyState);

  const [discountCode, setDiscountCode] = useState<string>(
    useRecoilValue(discount)
  );
  const setDiscountState = useSetRecoilState(discount);

  const clickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (discountCode !== null) {
      setDiscountState(discountCode);
    } else {
      setDiscountState("");
    }
  };

  const price = useRecoilValue(totalPrice);

  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    if (
      adress !== null &&
      city !== null &&
      postalCode !== null &&
      county !== null
    ) {
      setAdressState(adress);
      setCityState(city);
      setPostalCodeState(postalCode);
      setCountyState(county);
      navigate("/order-completed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-flex">
        <div className="modal-container">
          <h1 className="my-9 mt-12 text-center text-4xl">Almost done</h1>
          <div className="modal-grid">
            <div className="modal-grid__element1">
              <p className="text-xl font-bold mb-2">Order Details</p>
              <p className="text-xs my-1">TOPPINGS</p>
              <p className="text-base my-1">
                {toppings.map((name, index) => {
                  return " " + name;
                })}
              </p>
              <p className="text-base my-1">QTY: 2</p>
              <p className="text-base my-1">Delivery</p>
              <p className="text-xs my-1">
                Free delivery within 1hour or you don't have to pay.
              </p>
              <div className="form--discount my-10">
                <form>
                  <input
                    type="text"
                    className="text-base"
                    id="discount"
                    value={discountCode}
                    placeholder="Discount code"
                    onChange={(e) => setDiscountCode(e.target.value)}
                    background-color="transparent"
                  />
                </form>
                <button
                  className="button-secondary button-secondary--small"
                  onClick={clickHandler}
                >
                  Apply
                </button>
              </div>
              <div className="flex justify-between">
                <span className="text-base font-bold">Total Price</span>
                <span className="text-3xl font-bold">$ {price}</span>
              </div>
            </div>
            <div className="modal-grid__element2">
              <p className="text-xl font-bold mb-3">Shipping Information</p>
              <div className="form--small mb-3">
                <form>
                  <input
                    type="text"
                    className="text-base ml-4"
                    id="adress"
                    value={adress}
                    placeholder="Street name and number"
                    onChange={(e) => setAdress(e.target.value)}
                    background-color="transparent"
                    required
                  />
                </form>
              </div>
              <div className="flex justify-center gap-2 mb-3">
                <div className="form--smaller">
                  <form>
                    <input
                      type="text"
                      className="text-base ml-4"
                      id="city"
                      value={city}
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                      background-color="transparent"
                      required
                    />
                  </form>
                </div>
                <div className="form--smaller">
                  <form>
                    <input
                      type="text"
                      className="text-base ml-4"
                      id="postalCode"
                      value={postalCode}
                      placeholder="Postal code"
                      onChange={(e) => setPostalCode(e.target.value)}
                      background-color="transparent"
                      required
                    />
                  </form>
                </div>
              </div>
              <div className="form--small mb-6">
                <form>
                  <input
                    type="text"
                    className="text-base ml-4"
                    id="county"
                    value={county}
                    placeholder="County"
                    onChange={(e) => setCounty(e.target.value)}
                    background-color="transparent"
                    required
                  />
                </form>
              </div>
              <p className="text-xl">Payment Details</p>
              <p className="text-base mb-6">Cash on delivery </p>
              <button
                type="submit"
                className="button-finish mt-6"
                onClick={onClick}
              >
                Finish order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
