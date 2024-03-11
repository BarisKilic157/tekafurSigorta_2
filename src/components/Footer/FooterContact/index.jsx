import { NavLink } from "react-router-dom";
import FooterLink from "./FooterLink";

function FooterContact() {
  return (
    <div className="w-full">
      <header className="text-lg font-semibold text-white mb-2">
        İletişim
      </header>
      <div>
        <NavLink
          to={"/contact"}
          className="transition-all select-none w-full flex items-center justify-between bg-gradient-to-r from-blue-900 rounded to-blue-500 px-3 py-2 hover:opacity-90"
        >
          <span>Bizimle İletişime Geç</span>
          <i className="fa-solid fa-arrow-right-long flex items-center justify-center border-2 border-solid border-white rounded-full p-2"></i>
        </NavLink>
        <div className="flex gap-2 mt-3">
          <FooterLink
            iconName={"youtube"}
            url={"https://www.youtube.com/@TekafulDanismanligi"}
          >
            <i className="fa-brands fa-youtube"></i>
          </FooterLink>
          <FooterLink iconName={"facebook"}>
            <i className="fa-brands fa-facebook-f"></i>
          </FooterLink>
          <FooterLink iconName={"instagram"}>
            <i className="fa-brands fa-instagram"></i>
          </FooterLink>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
