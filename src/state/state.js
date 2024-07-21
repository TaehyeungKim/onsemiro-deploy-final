import { atom } from "recoil";

export const signUpState = atom({
  key: "signUp",
  default: {},
});

export const idealChoiceVisibleState = atom({
  key: "idealChoice",
  default: {
    visible: false,
    reqType: undefined,
  },
});
