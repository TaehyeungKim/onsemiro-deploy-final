import { instance, instanceWithToken } from "./axios";

export const signIn = async (data) => {
  const res = await instance.post("/account/signin", data);
  if (res.status === 200) window.location.href = "/main";
  else console.log("Error");
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    window.location.href = "/";
  } else {
    console.log("Error");
  }
  return response;
};
