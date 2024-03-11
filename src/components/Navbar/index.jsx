import { useNavigate } from "react-router";
import Item from "./item";
import { memo } from "react"; // tekrar render olayını engelleme

function Navbar() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/");
  };

  return (
    <div className="fixed top-0 w-full bg-white z-50">
      <nav className="h-[70px] py-5 px-20  flex justify-between items-center">
        <div>
          <button className="text-xl font-semibold" onClick={handleClick}>
            Tekafül Sigortacılık
          </button>
        </div>
        <div className="flex items-center gap-6">
          <Item link={"/"} text={"Anasayfa"} />
          <Item link={"/about"} text={"Hakkımızda"} />
          <Item link={"/contact"} text={"İletişim"} />
          <Item type="button" text={"Dil Desteği"} />
        </div>
      </nav>
    </div>
  );
}

export default memo(Navbar);
