import BasicProfile from "assets/profile1.png";

export default function IconImage({ src }) {
  return <img src={src} className="w-full"></img>;
}

export function RoundedProfileImage({ photo_url, ...props }) {
  return (
    <div
      className={` ${props.className} m-auto aspect-square bg-center bg-cover bg-no-repeat overflow-hidden rounded-full border-2 flex items-center justify-center`}
    >
      <IconImage src={photo_url ?? BasicProfile} />
    </div>
  );
}
