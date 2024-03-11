import { useNavigate } from "react-router";

function LinkButton({ url, text, type = "button" }) {
  const navigation = useNavigate();

  const goPage = () => {
    navigation(url);
  };
  return (
    <>
      {type === "button" ? (
        <button
          onClick={goPage}
          className="border-solid border-2 border-gray-300 rounded transition-all bg-white hover:bg-blue-200 hover:text-green-800 hover:text-base w-1/5 h-16  flex items-center justify-center text-sm "
        >
          {text}
        </button>
      ) : (
        <a
          href={url}
          className="border-solid border-2 border-gray-300 rounded transition-all bg-white hover:bg-blue-200 hover:text-green-800 hover:text-base w-1/5 h-16  flex items-center justify-center text-sm "
        >
          {text}
        </a>
      )}
    </>
  );
}

export default LinkButton;
