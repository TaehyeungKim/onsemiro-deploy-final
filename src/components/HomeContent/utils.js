import {
  getRequestForMe,
  getRecommend,
  getRestrictedProfile,
  getMatchingList,
  requestKakaoId,
  getPhotoData,
} from "apis/api";
import {
  REQUEST_MESSAGE_MAP,
  RECOMMEND_MESSAGE_MAP,
  MATCH_RESULT_RENDER_MAP,
} from "assets/asset";

export const callRequestForMe = async (dataSetter) => {
  const res = await getRequestForMe();
  const { type1, type2 } = res.data;

  let data = [];

  console.log(type1, type2, "request");

  if (type1)
    data = [
      ...type1?.map((d) => {
        if (d.matching_id)
          return {
            ...d.simpleProfile,
            matching_type: d.matching_type,
            matching_id: d.matching_id,
            // created_at: d.created_at,
            time: timeSection(new Date(d.created_at).getHours()).part,
            date: dayRender(d.created_at, ".", false),
            message: REQUEST_MESSAGE_MAP(d.matching_type),
            counter_id: d.counter_id,
          };
      }),
    ];

  if (type2)
    data = [
      ...data,
      ...type2?.map((d) => {
        if (d.matching_id)
          return {
            ...d.simpleProfile,
            matching_type: d.matching_type,
            matching_id: d.matching_id,
            // created_at: d.created_at,
            time: timeSection(new Date(d.created_at).getHours()).part,
            date: dayRender(d.created_at, ".", false),
            message: REQUEST_MESSAGE_MAP(d.matching_type),
            counter_id: d.counter_id,
          };
      }),
    ];
  // console.log(data, "cleaned data");

  dataSetter([...data.filter((d) => d !== undefined && d !== null)]);
};

export const getRecommendation = async (dataSetter) => {
  const recommended = await getRecommend();

  if (
    !recommended.data.recommended_user_id ||
    recommended.data.message_type !== 2
  )
    return dataSetter([
      {
        render_type: recommended.data.message_type,
        time: recommended.data.time,
        date: recommended.data.date,
      },
    ]);

  const profile = await getRestrictedProfile({
    counter_id: recommended.data.recommended_user_id,
  });
  // console.log(recommended.data, profile.data);
  dataSetter([
    {
      ...profile.data,
      render_type: recommended.data.message_type,
      matching_type: recommended.data.matching_type,
      message: RECOMMEND_MESSAGE_MAP(
        recommended.data.message_type,
        recommended.data.matching_type
      ),
      time: recommended.data.time,
      date: recommended.data.date,
    },
  ]);
};

export const soapDetailViewData = async (data, code, time) => {
  console.log(data.user2_profile);
  let kakao = "";
  let photo = "";
  if ([4, 5, 6, 7].includes(parseInt(code))) {
    const res = await requestKakaoId({
      counter_id: data.user2_profile.id,
    });
    const { kakao_id } = res.data;
    kakao = kakao_id;
  }
  // const { kakao_id, photo } = data;
  const message = kakao
    ? MATCH_RESULT_RENDER_MAP(code, kakao).message
    : MATCH_RESULT_RENDER_MAP(code).message;

  return {
    ...data.user2_profile,
    kakao_id: kakao,
    photo,
    message,
    ...time,
    code,
  };
};

export const cleanMatchList = async (listGetter) => {
  const list = await listGetter();

  const { results } = list;

  const l = results.map((e) => ({
    ...e,
    ...MATCH_RESULT_RENDER_MAP(e.matching_index),
  }));

  const sorted = [...l]
    .sort(
      (a, b) =>
        new Date(b.matching_request_at) - new Date(a.matching_request_at)
    )
    .map((result) => {
      if (result) {
        return {
          ...result,
          matching_request_at: dayRender(result.matching_request_at ?? null),
          time: timeSection(new Date(result.matching_request_at).getHours())
            .part,
        };
      }
    });

  if (sorted.length === 0) return [];

  // console.log(sorted, "sorted");
  // clear

  let marker = 0;
  let day = sorted[0].matching_request_at;

  const cleanedList = [];

  let tempData = [];

  for (let i = marker; i < sorted.length; i++) {
    if (sorted[i].matching_request_at !== day) {
      const obj = { day, data: tempData };
      cleanedList.push(obj);

      day = sorted[i].matching_request_at;
      tempData = [];
    }
    tempData.push(sorted[i]);
  }
  const lastObj = { day, data: tempData };
  // obj.day = sorted[sorted.length - 1].matching_request_at;
  cleanedList.push(lastObj);

  console.log(cleanedList, "cleanedlist");
  return cleanedList;
};

export const dayRender = (when, splitter, year = true) => {
  const options = year
    ? {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
    : { month: "2-digit", day: "2-digit" };
  const whenFormat = new Intl.DateTimeFormat("ko-KR", options).format(
    new Date(when)
  );

  let result = whenFormat.replace(/\s/g, "").replace(/\./g, "/");

  return result.slice(0, result.length - 1);
};

const timeSection = (t) => {
  if (t === undefined || t === null) return;
  if (t >= 6 && t < 12) return { part: "morning", time: t };
  else if (t >= 12 && t < 17) return { part: "afternoon", time: t };
  else if (t >= 17 && t < 22) return { part: "evening", time: t };
  else if (t >= 22 || t < 2) return { part: "night", time: t };
  else return { part: "dawn", time: t };
};

export const timeCalculate = (hour, minute) => {
  const timeMultiply = hour*60 + minute
  if (timeMultiply < 8*60) return { remainhour: ((8*60 - timeMultiply) - ((8*60 - timeMultiply)%60))/60, remainminute: (8*60 - timeMultiply)%60 };
  else if (timeMultiply >= 8*60 && timeMultiply < 17*60) return { remainhour: ((17*60 - timeMultiply) - ((17*60 - timeMultiply)%60))/60, remainminute: (17*60 - timeMultiply)%60 };
  else if (timeMultiply >= 17*60 && timeMultiply < 23*60) return { remainhour: ((23*60 - timeMultiply) - ((23*60 - timeMultiply)%60))/60, remainminute: (23*60 - timeMultiply)%60 };
  else if (timeMultiply >= 23*60 && timeMultiply < 24*60) return { remainhour: ((32*60 - timeMultiply) - ((32*60 - timeMultiply)%60))/60, remainminute: (32*60 - timeMultiply)%60 };
}

export const nextLetter = (t) => {
  if (t < 8) return { nextTime: "8:00" };
  else if (t >= 8 && t < 17) return { nextTime: "17:00" };
  else if (t >= 17 && t < 23) return { nextTime: "23:00"};
  else return { nextTime: "8:00" };
};