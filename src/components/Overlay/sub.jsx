import { getDetailedInfo } from "apis/api";
import {
  getPhotoUrlForListElement,
  soapDetailViewData,
} from "components/HomeContent/utils";
import { RoundedProfileImage } from "components/IconImage";
import { useEffect, useState } from "react";

export function MatchListArticle({ info, detailOpener, detailDataSetter }) {
  const [profileUrl, setProfileUrl] = useState(undefined);

  useEffect(() => {
    getPhotoUrlForListElement(info).then((url) => setProfileUrl(url));
  }, [info]);

  return (
    <article
      className={`flex flex-row w-full box-border rounded-lg border-main border-2 p-2 cursor-pointer ${
        info.active ? "bg-main bg-opacity-30" : ""
      }`}
      onClick={async () => {
        const res = await getDetailedInfo({
          type: info.type,
          id: info.id,
        });

        if (res.status === 200) {
          detailOpener(true);
          const data = await soapDetailViewData(res.data, {
            date: info.matching_request_at,
            time: info.time,
            photo: profileUrl,
          });
          detailDataSetter(data);
        }
      }}
    >
      <RoundedProfileImage photo_url={profileUrl} className={"w-20"} />

      <div className="grow flex flex-col justify-between ml-4">
        <span className="block font-bold">{info.profile.nickname}</span>
        <span className="block">
          {info.profile.age}세 {info.profile.gender}
        </span>
        <div className="flex w-full gap-1 text-xs">
          <span className="bg-main text-white block grow rounded-xl text-center shadow-md py-1">
            #{info.profile.univ}
          </span>
          <span className="bg-main text-white block grow rounded-xl text-center shadow-md py-1">
            #{info.profile.location}
          </span>
          <span className="bg-main text-white block grow rounded-xl text-center shadow-md py-1">
            #{info.profile.mbti}
          </span>
        </div>
      </div>
    </article>
  );
}
