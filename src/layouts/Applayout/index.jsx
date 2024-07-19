// import "./index.css";

export default function AppLayout({ children }) {
  return (
    <div className="bg-background-darker">
      <div className="w-main-frame flex flex-col bg-background margin mx-auto min-h-screen bg-main-image bg-fixed bg-center bg-no-repeat border-background box-border">
        {children}
      </div>
    </div>
  );
}
