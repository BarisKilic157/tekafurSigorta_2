import LinkButton from "../../../components/LinkButton";

function SliderMenu() {
  return (
    <div className="w-full h-auto   overflow-hidden flex ">
      {/* rounded : border-radius */}
      <div className="w-full h-full flex flex-col">
        <div className="relative h-[520px]  flex justify-center items-center text-lg font-normal">
          <img className="w-full h-full" src="images/6.jpg" alt="" />
          <div className="absolute  top-1 w-full  h-[98%] bg-black bg-opacity-30 text-white text-3xl font-medium flex items-center justify-center">
            Tekafül Sigortacılık
          </div>
        </div>
        <div className="absolute gap-2 w-full right-1 top-[550px] flex  bg-opacity-25 items-center justify-between h-auto px-16   ">
          <LinkButton url={"/"} text={"Hakkımızda"} />
          <LinkButton url={"/"} text={"Duyurular"} />
          <LinkButton
            type="a"
            url={"https://www.youtube.com/@TekafulDanismanligi"}
            text={"YouTube"}
          />
          <LinkButton url={""} text={"Makaleler"} />
          <LinkButton url={""} text={"Galeri"} />
        </div>
      </div>
    </div>
  );
}

export default SliderMenu;
