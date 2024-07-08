import IconImage from "../IconImage";

export default function MainIconSection({ icon, caption, children }) {
  return (
    <section className="h-80 flex flex-col mb-6">
      <div className="flex flex-row items-center relative mb-2">
        <div className="w-5 mr-2">
          <IconImage src={icon}></IconImage>
        </div>
        <h4 className="text-base">{caption}</h4>
      </div>
      <div className="bg-main-icon-section w-full rounded-xl flex flex-col items-center justify-center grow">
        {children}
      </div>
    </section>
  );
}
