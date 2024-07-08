import menu from "../../assets/hambg-menu.png";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";
import IconImage from "../IconImage";

export default function HomeHeader() {
  return (
    <header className="w-main-frame h-header-height flex flex-row items-center justify-between px-4 py-3 box-border border-b bg-white fixed top-0 z-10">
      <button className="w-8">
        <IconImage src={menu} />
      </button>
      <div className="w-36">
        <IconImage src={logo} />
      </div>
      <button className="w-8">
        <IconImage src={login} />
      </button>
    </header>
  );
}
