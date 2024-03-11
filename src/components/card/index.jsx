import { useNavigate } from "react-router";

function Card({ url, text, title, resim }) {
  const navigation = useNavigate();

  const goPage = () => {
    navigation(url);
  };
  return (
    <>
      <button
        onClick={goPage}
        className=" relative rounded-md overflow-hidden transition-all  w-[350px] h-[450px]  flex flex-col  items-center justify-end text-sm p-5 mt-5 bg-black bg-opacity-35 shadow-md shadow-black bottom-0 hover:bottom-2"
      >
        <img
          className=" absolute top-0 w-full h-full z-[-10]"
          src={resim}
          alt=""
        />

        <div className="text-lg border-solid border-2 border-gray-300 rounded-lg bg-gray-500 text-white bg-opacity-5 mb-5 px-2 py-1">
          {title}
        </div>
        <div className="text-base text-white h-[30%]  overflow-hidden ">
          {text}
        </div>
      </button>
    </>
  );
}
export default Card;
