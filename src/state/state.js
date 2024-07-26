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

export const layoutFloatingEndState = atom({
  key: "layoutFloating",
  default: false,
});

export const authSchoolState = atom({
  key: "authSchoolState",
  default: {
    univ: "",
    email: "",
    verification_code: "",
    requested: false,
  },
});

export const recommendDataState = atom({
  key: "recommendDataState",
  default: [],
});

export const requestDataState = atom({
  key: "requestDataState",
  default: [],
});

export const matchDataState = atom({
  key: "matchDataState",
  default: [],
});

export const photoDataState = atom({
  key: "photoDataState",
  default: [],
});

export const activeState = atom({
  key: "activeState",
  default: false,
});
