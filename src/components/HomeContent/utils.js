import {
  getRequestForMe,
  getRecommend,
  getRestrictedProfile,
  getMatchingList,
} from "apis/api";
import {
  REQUEST_MESSAGE_MAP,
  RECOMMEND_MESSAGE_MAP,
  MATCH_RESULT_MESSAGE_MAP,
} from "assets/asset";

export const callRequestForMe = async (dataSetter) => {
  const { type1, type2 } = (await getRequestForMe()).data;

  let data = [];

  if (type1)
    data = [
      ...type1?.map((d) => {
        if (d.matching_id)
          return {
            ...d.simpleProfile,
            matching_type: d.matching_type,
            matching_id: d.matching_id,
            time: d.created_at,
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
            created_at: d.created_at,
            messsage: REQUEST_MESSAGE_MAP(d.matching_type),
            counter_id: d.counter_id,
          };
      }),
    ];

  dataSetter([...data.filter((d) => d !== undefined && d !== null)]);
};

export const getRecommendation = async (dataSetter) => {
  const recommended = await getRecommend();

  const profile = await getRestrictedProfile({
    counter_id: recommended.data.recommended_user_id,
  });
  console.log(recommended.data, profile.data);
  dataSetter([
    {
      ...profile.data,
      message: RECOMMEND_MESSAGE_MAP(recommended.data.matching_type),
      matching_type: recommended.data.matching_type,
    },
  ]);
};

export const cleanMatchList = async () => {
  const list = await getMatchingList();
  const {
    pending_matches_type1_wh,
    pending_matches_type2_pur,
    pending_matches_type2_wh,
    result_matches_1,
    success_matches_1,
  } = list;

  const p1Wh = pending_matches_type1_wh.map((result) => ({
    ...result,
    message: MATCH_RESULT_MESSAGE_MAP(1),
  }));
  const p2Pur = pending_matches_type2_pur.map((result) => ({
    ...result,
    message: MATCH_RESULT_MESSAGE_MAP(2),
  }));
  const p2Wh = pending_matches_type2_wh.map((result) => ({
    ...result,
    message: MATCH_RESULT_MESSAGE_MAP(3),
  }));
  const resultPur = result_matches_1.map((result) => ({
    ...result,
    message: MATCH_RESULT_MESSAGE_MAP(4),
  }));
  const successWh = success_matches_1.map((result) => ({
    ...result,
    message: MATCH_RESULT_MESSAGE_MAP(5),
  }));

  const sorted = [...p1Wh, ...p2Pur, ...p2Wh, ...resultPur, ...successWh]
    .sort(
      (a, b) =>
        new Date(b.matching_request_at) - new Date(a.matching_request_at)
    )
    .map((result) => {
      if (result) {
        return {
          ...result,
          matching_request_at: dayRender(result.matching_request_at ?? null),
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

  // console.log(cleanedList);
  return cleanedList;
};

export const dayRender = (when) => {
  const whenFormat = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(when));

  return whenFormat.replace(/\s/g, "");
};
