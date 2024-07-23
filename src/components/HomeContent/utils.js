import { getRequestForMe } from "apis/api";
import { REQUEST_MESSAGE_MAP } from "assets/asset";

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
