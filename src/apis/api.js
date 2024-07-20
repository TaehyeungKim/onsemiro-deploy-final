import { instance, instanceWithToken } from "./axios";

export const signIn = async (data) => {
  const res = await instance.post("/account/signin/", data);
  // if (res.status === 200) window.location.href = "/main";
  if (res.status === 200) console.log(res.data);
  else console.log("Error");
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    // window.location.href = "/";
  } else {
    console.log("Error");
  }
  return response;
};

export const authSchool = async (data) => {
  const response = await instanceWithToken.put("/account/email/", data);
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    // window.location.href = "/";
  } else {
    console.log("Error");
  }
  return response;
};

export const submitProfile = async (data) => {
  const response = await instanceWithToken.put("/account/profile/", data);
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    window.location.href = "/home";
  } else {
    console.log(response);
  }
  return response;
};

export const getRecommend = async () => {
  const response = await instanceWithToken.get("/account/recommend/");
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    return response;
  } else {
    console.log(response);
  }
};

export const getRestrictedProfile = async (data) => {
  console.log("request", data);
  const response = await instanceWithToken.post(
    "/account/profile/getrp/",
    data
  );
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    return response;
  } else {
    console.log(response);
  }
};

export const requestMatching = async (data) => {
  const response = await instanceWithToken.post("/matching/type1/", data);

  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    return response;
  } else console.log(response);
  return response;
};

export const getRequestForMe = async () => {
  const response = await instanceWithToken.get("/matching/request/");

  if (response.status === 200) {
    console.log(response.data);
  } else console.log(response);
  return response;
};
