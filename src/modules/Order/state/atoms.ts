import { atom } from "recoil";

export const toppingsList = atom<string[]>({
  key: "toppingsList",
  default: [],
});

export const qty = atom<number>({
  key: "qty",
  default: 1,
});

export const selectStyle = atom<string>({
  key: "selectStyle",
  default: "toppings-container",
});

export const isSelected = atom<boolean>({
  key: "isSelected",
  default: false,
});

export const discount = atom<string>({
  key: "discount",
  default: "",
});

export const extraPrice = atom<number>({
  key: "extraPrice",
  default: 0,
});

export const pizzaSize = atom<number>({
  key: "pizzaSize",
  default: 0,
});

export const adressState = atom<string>({
  key: "adress",
  default: "",
});

export const cityState = atom<string>({
  key: "city",
  default: "",
});

export const postalCodeState = atom<string>({
  key: "postalCode",
  default: "",
});

export const countyState = atom<string>({
  key: "county",
  default: "",
});
