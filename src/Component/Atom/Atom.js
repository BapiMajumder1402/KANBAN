import { atom } from "recoil";

export const ListAtom = atom({
  key: "ListAtom",
  default: [],
});

export const TodoAtom = atom({
  key: "TodoTask",
  default: [],
});
