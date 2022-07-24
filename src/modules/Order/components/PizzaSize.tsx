import { useSetRecoilState } from "recoil";
import { pizzaSize } from "../state/atoms";

export const PizzaSize: React.FC = () => {
  const setSizeState = useSetRecoilState(pizzaSize);
  return (
    <section>
      <p className="text-4xl mt-24 mb-8 text-center">Pizza! Pizza! size</p>
      <div className="form">
        <input
          type="radio"
          id="s"
          name="pizza_size"
          value={7}
          onChange={() => setSizeState(7)}
        />
        <label className="radio-button" htmlFor="s">
          S
        </label>
        <input
          type="radio"
          id="m"
          name="pizza_size"
          value={10}
          onChange={() => setSizeState(10)}
        />
        <label className="radio-button" htmlFor="m">
          M
        </label>
        <input
          className="radio-button"
          type="radio"
          id="l"
          name="pizza_size"
          value={15}
          onChange={() => setSizeState(15)}
        />
        <label className="radio-button" htmlFor="l">
          L
        </label>
      </div>
    </section>
  );
};
