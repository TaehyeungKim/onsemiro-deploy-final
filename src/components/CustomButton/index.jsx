export function MainCustomButton({ addedStyle = "", event = null, children }) {
  return (
    <button
      onClick={event?.onClick}
      className={`bg-main px-4 py-2 w-fit rounded-lg mx-auto shadow-lg text-white box-border block ${addedStyle} cursor-pointer`}
    >
      {children}
    </button>
  );
}

export function CustomButtonWithCount({
  count,
  addedStyle = "",
  event = null,
  children,
}) {
  return (
    <div className="w-full relative">
      <div className="absolute w-5 rounded-full aspect-square bg-count-red text-white -top-2 -right-2 flex items-center justify-center text-xs">
        {count}
      </div>
      <MainCustomButton addedStyle={`${addedStyle} !w-full`} event={event}>
        {children}
      </MainCustomButton>
    </div>
  );
}
