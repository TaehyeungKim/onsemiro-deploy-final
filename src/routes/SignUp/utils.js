import {
  IDEAL_REQ_TYPE,
  heightRange,
  TIME_SECTION_FOR_RECOMMENDATION,
} from "assets/asset";

export const signUpPreferenceDataSoap = (key, data) => {
  const target =
    data.preference &&
    data.preference[
      IDEAL_REQ_TYPE.find((r) => data.preference[r] && data.preference[r][key])
    ];

  if (target) {
    switch (key) {
      case "height":
        if (data.preference) {
          let { height_min, height_max } = target[key];
          if (height_min === undefined || height_max === undefined)
            return undefined;
          if (height_min < 150) height_min = 150;
          if (height_max > 185) height_max = 185;
          return `${height_min} ${height_max}`;
        }
      case "age":
        if (data.preference) {
          const { age_min, age_max } = target[key];
          if (age_min === undefined || age_max === undefined) return undefined;

          return `${age_min} ${age_max}`;
        }
      case "location":
        if (data.preference) {
          const { city, subRegion } = target[key];
          if (city === undefined || subRegion === undefined) return undefined;
          return `${city} ${subRegion}`;
        }
      case "mbti":
        if (data.preference) {
          const { first, second, third, fourth } = target[key];
          if (!first || !second || !third || !fourth) return undefined;
          return `${first} ${second} ${third} ${fourth}`;
        }
      default:
        if (data.preference) return target[key];
    }
  }
};

export const dataSoapBeforeSubmit = (data) => {
  const signUpData = {
    kakao_id: data.kakao_id,
    nickname: data.nickname,
    univ: data.univ,
    gender: data.gender_identity,
    gender_preference: data.gender_preference,
    age: data.age,
    bdsm: data.bdsm,
    height: heightRange(data.height),
    weight: data.shape,
    appearance: data.appearance,
    eyelid: data.eyelid,
    mbti: data.mbti,
    character: data.character,
    location: data.city && data.subRegion && `${data.city} ${data.subRegion}`,
    hobby: data.interest && [
      ...data.interest.map((interest) => interest.value),
    ],
    introduction: data.introduction,
    match_same_univ: data.same_univ,
    gender_wanted: data.prefer_gender_identity,
    meeting_frequency: data.meeting_frequency,
    ideal_age: 0,
    ideal_bdsm: "",
    ideal_height: "",
    ideal_weight: "",
    ideal_appearance: "",
    ideal_eyelid: "",
    ideal_mbti: "",
    ideal_character: "",
    ideal_location: "",
    ideal_condition: {},
  };

  if (data.preference) {
    const { required, optional_1, optional_2 } = data.preference;
    if (required) {
      const key = Object.keys(required)[0];
      signUpData[`ideal_${key}`] = signUpPreferenceDataSoap(key, data);
      signUpData.ideal_condition.required = key;
    }
    if (optional_1) {
      const key = Object.keys(optional_1)[0];
      signUpData[`ideal_${key}`] = signUpPreferenceDataSoap(key, data);
      signUpData.ideal_condition.optional_1 = key;
    }
    if (optional_2) {
      const key = Object.keys(optional_2)[0];
      signUpData[`ideal_${key}`] = signUpPreferenceDataSoap(key, data);

      signUpData.ideal_condition.optional_2 = key;
    }
  }

  return signUpData;
};

export const executeOnDataFulfilled = (level, data, execute) => {
  switch (level) {
    case 0:
      if (data.authorized) execute();
      break;
    case 1:
      if (data.kakao_id) execute();
      break;
    case 2:
      if (data.nickname) execute();
      break;
    case 3:
      if (data.gender_identity) execute();
      break;
    case 4:
      if (data.bdsm && data.gender_preference) execute();
      break;
    case 5:
      if (data.appearance && data.height && data.eyelid) execute();
      break;
    case 6:
      if (data.mbti && data.character) execute();
      break;
    case 7:
      if (data.interest && data.interest.length > 0) execute();
      break;
    case 8:
      if (data.meeting_frequency && data.city && data.subRegion) execute();
      break;
    case 9:
      if (data.std && data.photo) execute();
      break;
    case 10:
      if (data.introduction) execute();
      break;
    case 11:
      if (data.prefer_gender_identity) execute();
      break;
    case 12:
      execute();
      break;
    case 13:
      execute();
      break;
  }
};

export const timeForNextRecommendation = () => {
  const current = new Date();
  const [curHour, curMin] = [current.getHours(), current.getMinutes()];

  let marker = 0;

  while (marker < TIME_SECTION_FOR_RECOMMENDATION.length) {}
};
