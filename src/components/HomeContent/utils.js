import {
  getRequestForMe,
  getRecommend,
  getRestrictedProfile,
  getMatchingList,
} from "apis/api";
import {
  REQUEST_MESSAGE_MAP,
  RECOMMEND_MESSAGE_MAP,
  MATCH_RESULT_RENDER_MAP,
} from "assets/asset";

export const callRequestForMe = async (dataSetter) => {
  const { type1, type2 } = (await getRequestForMe()).data;

  let data = [];

  console.log(type1, type2);

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
            message: REQUEST_MESSAGE_MAP(d.matching_type),
            counter_id: d.counter_id,
          };
      }),
    ];
  console.log(data);

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

export const cleanMatchList = async () => {
  const list = await getMatchingList();
  const { results } = list;

  const l = results.map((e) => ({
    ...e,
    ...MATCH_RESULT_RENDER_MAP(e.matching_num),
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
