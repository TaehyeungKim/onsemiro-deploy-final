import { instance, instanceWithToken } from "./axios";

export const signIn = async (data) => {
  const res = await instance.post("/account/signin/", data);

  if (res.status === 200) {
    window.location.href = "/main";
  } else console.log("Error");
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  if (response.status === 200 || response.status === 201) {
    return true;
  } else {
    console.log("Error");
  }
  return response;
};

export const requestSchoolVerifyCode = async (data) => {
  const response = await instanceWithToken.post("/account/email/", data);
  if (response.status === 200 || response.status === 201) {
  } else {
    console.log("Error");
  }
  return response;
};

export const requestAuthSchool = async (data) => {
  const response = await instanceWithToken.put("/account/email/", data);
  if (response.status === 200 || response.status === 201) {
  } else {
    console.log("Error");
  }
  return response;
};

export const submitSignUpData = async (profile, photo) => {
  const profileResponse = await submitProfile(profile);
  if (profileResponse.status === 200 || profileResponse.status === 201) {
    const photoResponse = await submitPhoto(photo);
    if (photoResponse.status === 200 || photoResponse.status === 201) {
      window.location.href = "/home";
    } else console.log("error");
  }
};

const submitProfile = async (profile) => {
  const response = await instanceWithToken.put("/account/profile/", profile);
  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
  } else {
    console.log(response);
  }
  return response;
};

const submitPhoto = async (photo) => {
  const formData = new FormData();
  formData.append("photo", photo.photo);
  formData.append("std_test_report", photo.std_test_report);

  const response = await instanceWithToken.post("/account/photo/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
  } else {
    console.log(response);
  }
  return response;
};

export const getRecommend = async () => {
  const response = await instanceWithToken.get("/account/recommend/");

  if (response.status === 200 || response.status === 201) {
    console.log("getRecommend success");
    return response;
  } else {
    console.log(response);
  }
};

export const deleteRecommend = async () => {
  const response = await instanceWithToken.delete("/account/recommend/");
  if (response.status === 204) {
    console.log(response.data);
    return true;
  } else {
    console.log(response);
  }
};

export const getRestrictedProfile = async (data) => {
  const response = await instanceWithToken.post(
    "/account/profile/getrp/",
    data
  );
  if (response.status === 200 || response.status === 201) {
    return response;
  } else {
    console.log(response);
  }
};

export const requestMatching = async (data) => {
  const response = await instanceWithToken.post("/matching/type1/", data);

  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    return true;
  } else console.log(response);
  return response;
};

export const requestPhoto = async (data) => {
  console.log(data);
  const response = await instanceWithToken.post("/matching/type2/photo/", data);

  if (response.status === 201) {
    console.log(response.data);
    return true;
  } else console.log(response);
  return response;
};

export const getPhotoData = async (data) => {
  const response = await instanceWithToken.post(
    "/account/profile/getphoto/",
    data
  );

  if (response.status === 200) {
    console.log("photo get success", response.data);
    return response.data;
  }
};

export const requestKakaoId = async (data) => {
  const response = await instanceWithToken.post(
    "/account/profile/getkakao/",
    data
  );

  if (response.status === 200 || response.status === 201) {
    console.log(response.data);
    return response;
  } else console.log(response);
  return response;
};

export const acceptMatching = async (data) => {
  const response = await instanceWithToken.put("/matching/type1/", data);

  if (response.status === 200 || response.status === 201) {
    const kakaoResponse = await requestKakaoId({
      counter_id: response.data.counter_id,
    });
    if (kakaoResponse.status === 200 || kakaoResponse.status === 201) {
      return kakaoResponse;
    } else {
      return kakaoResponse;
    }
  } else console.log(response);
};

export const acceptMatchingAfterPhoto = async (data) => {
  const response = await instanceWithToken.put("/matching/type2/final/", data);

  return response;
};

export const getRequestForMe = async () => {
  const response = await instanceWithToken.get("/matching/request/");

  if (response.status === 200) {
  } else console.log(response);
  return response;
};

export const deleteRequestForMe = async (data) => {
  const response = await instanceWithToken.put("/matching/refuse/", data);

  if (response.status === 200) {
    console.log(response.data);
    return true;
  } else console.log(response);
};

export const getMatchingList = async () => {
  const response = await instanceWithToken.get("/matching/results/");

  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  } else console.log(response);
};

export const getDetailedInfo = async (data) => {
  console.log(data, "detail");
  const response = await instanceWithToken.post(
    "/matching/profile/details/",
    data
  );

  if (response.status === 200) {
    return response;
  } else console.log(response);
};

export const acceptPhoto = async (data) => {
  const response = await instanceWithToken.put("/matching/type2/photo/", data);

  if (response.status === 200) {
    return true;
  } else {
    console.log(response);
    return false;
  }
};

export const getPhotoResults = async () => {
  const response = await instanceWithToken.get("/matching/photo_results/");

  if (response.status === 200) return response.data;
  // console.log(response, "photo_result");

  return response;
};

export const toggleActiveMode = async () => {
  const response = await instanceWithToken.put("/account/user_activate/");

  if (response.status === 200) {
    console.log(response, "toggle");
    if (response.data.active === "success") return true;
    return false;
  }
};

export const getActiveMode = async () => {
  const response = await instanceWithToken.get("/account/user_activate/");
  console.log(response, "getActive");
  if (response.status === 200) {
    if (response.data.active === "fail") return true;
    return false;
  }
};

// export const TARGET = "http://34.194.153.39:8000";
export const TARGET = "http://43.201.130.12/";
