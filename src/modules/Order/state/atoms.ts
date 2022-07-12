import { atom } from "recoil";

export const discount = atom<number>({
  key: "discount",
  default: 0,
});

export const extraPrice = atom<number>({
  key: "extraPrice",
  default: 0,
});

export const pizzaSize = atom<number>({
  key: "pizzaSize",
  default: 0,
});

