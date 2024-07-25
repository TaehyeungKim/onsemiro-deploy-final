export function MainCustomButton({ addedStyle = "", children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-main px-4 py-2 w-fit rounded-lg mx-auto shadow-lg text-white box-border block ${addedStyle} cursor-pointer`}
    >
      {children}
    </button>
  );
}

export function CustomButtonWithCount({
  count,
  addedStyle = "",
  children,
  ...props
}) {
  return (
    <div className="w-full relative">
      {count !== 0 && (
        <div className="absolute w-5 rounded-full aspect-square bg-count-red text-white -top-2 -right-2 flex items-center justify-center text-xs">
          {count}
        </div>
      )}
      <MainCustomButton addedStyle={`${addedStyle} !w-full`} {...props}>
        {children}
      </MainCustomButton>
    </div>
  );
}
