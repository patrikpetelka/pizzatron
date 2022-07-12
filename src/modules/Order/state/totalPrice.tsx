import { selector } from "recoil";
import { pizzaSize, extraPrice, discount } from "./atoms";

export const totalPrice = selector<number>({
  key: "totalPrice",
  get: ({ get }) => {
    const extra = get(extraPrice);
    const size = get(pizzaSize);
    const discountPrice = get(discount);
    const price = (extra + size) * (1 - discountPrice);
    return Number(price.toPrecision(2));
  },
});
