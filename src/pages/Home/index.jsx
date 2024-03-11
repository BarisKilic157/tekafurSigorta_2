import SliderMenu from "./SliderMenu";
import Card from "../../components/card";
function Home() {
  return (
    <div className="flex flex-col items-center gap-7">
      <SliderMenu />
      <div className="flex flex-col gap-8 my-10 w-[73%]">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-red-600 text-4xl border-solid border-2 border-white border-b-gray-400 pt-1 pb-5">
              Haberler
            </h3>
            <h6 className=" text-xl mt-1 ">
              Sektöre dair tüm haberler Tekafül Sigorta'da!
            </h6>
          </div>
          <div className="flex flex-wrap items-center justify-between ">
            <Card
              url={"/"}
              resim={"images/6.jpg"}
              title={"Sigortada Bugün"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />
            <Card
              url={"/"}
              resim={"images/4.jpg"}
              title={"Ramazan Bayramı"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />

            <Card
              url={"/"}
              resim={"images/5.jpg"}
              title={"Kadılar günü"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-red-600 text-4xl border-solid border-2 border-white border-b-gray-400 py-5">
              Duyurular
            </h3>
            <h6 className=" text-xl mt-1 ">
              Sektöre dair tüm duyuruları takip edin!
            </h6>
          </div>
          <div className="flex flex-wrap items-center justify-between ">
            <Card
              url={"/"}
              resim={"images/6.jpg"}
              title={"Sigortada Bugün"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />
            <Card
              url={"/"}
              resim={"images/4.jpg"}
              title={"Ramazan Bayramı"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />

            <Card
              url={"/"}
              resim={"images/5.jpg"}
              title={"Kadılar günü"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-red-600 text-4xl border-solid border-2 border-white border-b-gray-400 py-5">
              Makaleler
            </h3>
            <h6 className=" text-xl mt-1">
              Sektöre dair tüm Makaleler Tekafül Sigorta'da!
            </h6>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <Card
              url={"/"}
              resim={"images/6.jpg"}
              title={"Sigortada Bugün"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />
            <Card
              url={"/"}
              resim={"images/4.jpg"}
              title={"Ramazan Bayramı"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />

            <Card
              url={"/"}
              resim={"images/5.jpg"}
              title={"Kadılar günü"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium soluta temporibus nihil animi quo."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
