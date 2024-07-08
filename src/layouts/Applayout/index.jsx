// import "./index.css";

export default function AppLayout({ children }) {
  return (
    <div className="bg-background">
      <div className="w-main-frame flex flex-col bg-white margin mx-auto min-h-screen">
        {children}
      </div>
    </div>
  );
}
