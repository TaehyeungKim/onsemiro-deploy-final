// import "./index.css";

export default function AppLayout({ children }) {
  return (
    <div className="bg-background-darker">
      <div className="max-w-main-frame w-screen flex flex-col bg-background margin mx-auto min-h-screen  border-background box-border">
        {children}
      </div>
    </div>
  );
}
