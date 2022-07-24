import { selector } from "recoil";
import { pizzaSize, extraPrice, discount, qty } from "./atoms";

export const totalPrice = selector<number>({
  key: "totalPrice",
  get: ({ get }) => {
    const extra = get(extraPrice);
    const size = get(pizzaSize);
    const discountPrice = get(discount);
    const quantity = get(qty);
    var price = 0;
    if (discountPrice !== "") {
      price = quantity * (extra + size) * 0.9;
      return Number(price.toPrecision(2));
    } else {
      price = quantity * (extra + size);
      return Number(price.toPrecision(2));
    }
  },
});
