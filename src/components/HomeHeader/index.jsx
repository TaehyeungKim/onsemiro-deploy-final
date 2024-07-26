import menu from "assets/icons/hambg-menu.png";
import logo from "assets/logo/logo.png";
import login from "assets/icons/login.png";
import IconImage from "components/IconImage";

export default function HomeHeader() {
  return (
    <header className="w-main-frame h-header-height flex flex-row items-center justify-between px-4 py-3 box-border border-b bg-white fixed top-0 z-10">
      <button className="w-8">
        <IconImage src={menu} />
      </button>
      <div className="w-40">
        <IconImage src={logo} />
      </div>
      <button className="w-8">
        <IconImage src={login} />
      </button>
    </header>
  );
}
