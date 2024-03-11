import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Item({ type = "nav", link, text }) {
  return (
    <>
      {type === "nav" ? (
        <NavLink
          className={({ isActive }) =>
            classNames(
              "text-[color:var(--text)] font-medium transition-colors hover:bg-slate-200 hover:bg-opacity-60 p-3 rounded-3xl",
              {
                "text-red-600": isActive,
              }
            )
          }
          to={link}
        >
          {text}
        </NavLink>
      ) : (
        <button>{text}</button>
      )}
    </>
  );
}

export default Item;
