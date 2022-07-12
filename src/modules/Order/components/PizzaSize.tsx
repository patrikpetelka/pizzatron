import { useSetRecoilState } from "recoil";
import { pizzaSize } from "../state/atoms";

export const PizzaSize: React.FC = () => {
  const setSizeState = useSetRecoilState(pizzaSize);
  return (
    <section>
      <p className="text-4xl mt-24 mb-8 text-center">Pizza! Pizza! size</p>
      <div className="box">
        <input
          type="radio"
          id="s"
          name="pizza_size"
          value={7}
          onChange={() => setSizeState(7)}
        />
        <label htmlFor="s">S</label>
        <input
          type="radio"
          id="m"
          name="pizza_size"
          value={10}
          onChange={() => setSizeState(10)}
        />
        <label htmlFor="m">M</label>
        <input
          type="radio"
          id="l"
          name="pizza_size"
          value={15}
          onChange={() => setSizeState(15)}
        />
        <label htmlFor="l">L</label>
      </div>
    </section>
  );
};
