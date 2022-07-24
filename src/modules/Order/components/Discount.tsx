import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { discount } from "../state/atoms";

export const Discount: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string>("");
  const setDiscountState = useSetRecoilState(discount);
  const clickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (discountCode !== null) {
      setDiscountState(discountCode);
    } else {
      setDiscountState("");
    }
  };

  const onChange = (e: any) => {
    e.preventDefault();
  };

  return (
    <section>
      <p className="text-4xl mt-20 mb-8 text-center">Get the discount</p>
      <div className="form">
        <form>
          <input
            type="text"
            className="discountInput"
            id="discount"
            value={discountCode}
            placeholder="Enter discount code"
            onChange={(e) => setDiscountCode(e.target.value)}
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
