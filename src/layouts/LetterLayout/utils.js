import { HeightRange } from "assets/asset";
import {
  requestMatching,
  requestPhoto,
  requestKakaoId,
  acceptPhoto,
  getPhotoData,
  acceptMatching,
  acceptMatchingAfterPhoto,
} from "apis/api";

export const updateLetterMessage = (list, updater, index, message) => {
  const temp = { ...list[index] };
  temp.message = message;
  temp.acted = true;

  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (i === index) newList = [...newList, temp];
    else newList = [...newList, list[i]];
  }

  updater(newList);
};

export const soapProfileLineRender = (key, info) => {
  return key === "appearance"
    ? info[key] && `${info[key]} ${info["eyelid"] && info["eyelid"]}`
    : key === "height"
    ? info[key] && HeightRange[info[key]]
    : key === "meeting_frequency"
    ? info[key] && `주 ${info[key]}회`
    : info[key] ?? null;
};

export const recommendPositiveCall = async (data, type, action) => {
  if (type === 1)
    return requestMatching(data).then((res) => {
      if (res) {
        action(
          <>
            매칭 요청을 보냈습니다.
            <br />
            상대방의 매칭 수락 여부가
            <br />
            24시간 내에 결정돼요.
          </>
        );
      }
    });
  else
    return requestPhoto(data).then((res) => {
      if (res) {
        action(
          <>
            사진을 요청했어요! 사진 요청 결과는
            <br />
            매칭 현황 보기 - 사진 요청 결과에서
            <br />
            확인할 수 있어요.
          </>
        );
      }
    });
};

export const requestPositiveCall = async (data, type, action, counter_id) => {
  if (type === 1)
    return acceptMatching(data).then(async (res) => {
      if (res) {
        const { counter_id } = res.data;
        const response = await requestKakaoId({ counter_id });
        action(
          <>
            축하드립니다! 매칭에 성공하셨습니다.
            <br />
            {`상대방의 카톡 아이디는 ${response.data.kakao_id}입니다.`}
          </>
        );
      }
    });
  else
    return acceptPhoto(data).then(async (res) => {
      const photoResponse = await getPhotoData({ counter_id });
      console.log(photoResponse);

      if (res) {
        action(
          <>
            사진이 공개됐어요!
            <br />
            매칭 수락 여부를
            <br />
            24시간 내에 결정해주세요.
          </>,
          photoResponse.photo_url
        );
      }
    });
};

export const detailPositiveCall = async (data, action, counter_id) => {
  return acceptMatchingAfterPhoto(data).then(async (res) => {
    if (res.status === 200 || res.status === 201) {
      if (res.data.message === "accept successful")
        return action(
          <>
            매칭 요청을 보냈습니다.
            <br />
            상대방의 매칭 수락 여부가
            <br />
            24시간 내에 결정돼요.
          </>
        );
      const response = await requestKakaoId({ counter_id });
      action(
        <>
          축하드립니다! 매칭에 성공하셨습니다.
          <br />
          {`상대방의 카톡 아이디는 ${response.data.kakao_id}입니다.`}
        </>
      );
    }
  });
};
