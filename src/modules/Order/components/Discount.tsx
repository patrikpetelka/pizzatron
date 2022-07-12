import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { discount } from "../state/atoms";

export const Discount: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<number>(0);
  const setDiscountState = useSetRecoilState(discount);
  const onChange = (e: any) => {
    setDiscountCode(e.target.value);
  };
  const clickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (discountCode !== null) {
      setDiscountState(0.1);
    } else {
      setDiscountState(0);
    }
  };

  return (
    <section>
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
        <button className="button-secondary" onClick={clickHandler}>
          Apply
        </button>
      </div>
    </section>
  );
};
