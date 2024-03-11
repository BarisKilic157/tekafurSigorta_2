import { memo } from "react";
import FooterCategories from "./FooterCategories";
import FooterContact from "./FooterContact";

function Footer() {
  return (
    <footer className="bg-slate-900 px-20 pt-10">
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 w-3/5">
          <FooterCategories />
        </div>
        <div className="text-white w-2/5">
          <FooterContact />
        </div>
      </div>
      <div className="p-2 py-10 text-slate-500 w-full flex items-center justify-center">
        <span>© 2024 Tekafül Sigortacılık - Demo</span>
      </div>
    </footer>
  );
}

export default memo(Footer);
