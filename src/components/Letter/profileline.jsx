export default function ProfileLine({ label, value }) {
  return (
    <div className="flex flex-row justify-between items-center my-1">
      <div className="block">{label}</div>
      <div className="inline-block bg-profile rounded-lg text-right w-fit p-1">
        {value}
      </div>
    </div>
  );
}
