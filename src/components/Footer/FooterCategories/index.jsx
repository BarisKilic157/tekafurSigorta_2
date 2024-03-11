import { NavLink } from "react-router-dom";
import { useData } from "../../../Context";

function FooterCategories() {
  const { footerCategories } = useData();

  return (
    <>
      {footerCategories.map((category, index) => (
        <div key={index}>
          <header className="text-lg font-medium text-white p-1 mb-2">
            {category.title}
          </header>
          <div className="flex flex-col gap-2">
            {category.sub.map((sub, index) => (
              <NavLink className={"text-white"} to={sub.url} key={index}>
                {sub.text}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default FooterCategories;
