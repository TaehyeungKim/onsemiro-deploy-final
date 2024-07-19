export default function ProfileLine({ label, value }) {
  return (
    <div className="flex flex-row justify-between items-center my-1">
      <div className="block">{label}</div>
      <div>
        {typeof value === "object" ? (
          Object.getPrototypeOf(value).map &&
          value.map((v, i) => (
            <div
              key={i}
              className="inline-block bg-input rounded-lg text-right w-fit p-1 ml-2"
            >
              {v}
            </div>
          ))
        ) : (
          <div className="inline-block bg-input rounded-lg text-right w-fit p-1">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}
