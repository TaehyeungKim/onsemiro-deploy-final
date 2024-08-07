export function MainCustomButton({ children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-main px-4 py-2 w-fit rounded-lg mx-auto shadow-lg text-white box-border block ${props.className} cursor-pointer flex items-center justify-center`}
    >
      {children}
    </button>
  );
}

export function CustomButtonWithCount({
  count,

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
      <MainCustomButton className={`${props.className} !w-full`} {...props}>
        {children}
      </MainCustomButton>
    </div>
  );
}
