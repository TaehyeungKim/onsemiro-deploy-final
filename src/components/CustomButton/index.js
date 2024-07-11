export function MainCustomButton({ addedStyle = "", event = null, children }) {
  return (
    <button
      onClick={event?.onClick}
      className={`bg-main px-4 py-2 w-fit rounded-lg mx-auto my-auto shadow-lg text-white box-border block ${addedStyle} cursor-pointer`}
    >
      {children}
    </button>
  );
}
