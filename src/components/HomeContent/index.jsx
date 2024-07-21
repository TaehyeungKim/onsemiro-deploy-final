export default function MainSection({ caption, children }) {
  return (
    <section className="flex flex-col mb-6 mt-6 w-full">
      <div className="flex flex-row items-center relative mb-2">
        <h4 className="text-base text-center w-full">{caption}</h4>
      </div>
      <div className="w-full rounded-md overflow-hidden shadow-lg">
        {children}
      </div>
    </section>
  );
}
