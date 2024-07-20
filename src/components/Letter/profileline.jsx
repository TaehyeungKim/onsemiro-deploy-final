export default function ProfileLine({ label, value }) {
  return (
    <div className="flex flex-row justify-between items-center my-1">
      <div className="block shrink-0 mr-11">{label}</div>
      <div className="flex flex-wrap justify-end gap-1">
        {value && typeof value === "object" ? (
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
