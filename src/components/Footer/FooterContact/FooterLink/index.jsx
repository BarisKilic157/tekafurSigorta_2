import classNames from "classnames";

function FooterLink({ children, url, iconName }) {
  return (
    <a
      className={classNames(
        "flex items-center justify-center text-base cursor-pointer select-none scale-100 w-8 h-8 rounded-md transition-all text-white hover:scale-110 hover:text-lg",
        {
          "bg-[#1877f2]": iconName === "facebook",
          "bg-gradient-to-r from-[#f46f30] to-[#c32aa3]":
            iconName === "instagram",
          "bg-[#ff0000]": iconName === "youtube",
        }
      )}
      href={url}
    >
      {children}
    </a>
  );
}

export default FooterLink;
