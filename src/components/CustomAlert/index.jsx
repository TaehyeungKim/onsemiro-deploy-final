export default function CustomAlertLayout({ children }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-background z-40 flex items-center justify-center bg-opacity-70">
      <div className="bg-background-darker rounded-lg flex flex-col justify-center items-center p-4">
        {children}
      </div>
    </div>
  );
}
