import { useEffect, useState } from "react";
import { getPhotoData } from "apis/api";
import BasicProfile from "assets/profile1.png";

export default function IconImage({ src }) {
  return <img src={src} className="w-full"></img>;
}

export function RoundedProfileImage({ counter_id, ...props }) {
  const [src, setSrc] = useState(() => BasicProfile);

  useEffect(() => {
    try {
      getPhotoData({ counter_id })
        .then((res) => setSrc(res.photo_url))
        .catch((error) => {});
    } catch (e) {
      return;
    }
  }, [counter_id]);

  return (
    <div
      className={` ${props.className} m-auto aspect-square bg-center bg-cover bg-no-repeat overflow-hidden rounded-full border-2 flex items-center justify-center`}
    >
      <IconImage src={src} />
    </div>
  );
}
