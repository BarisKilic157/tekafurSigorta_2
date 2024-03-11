import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [name, setName] = useState("");
  const footerCategories = [
    {
      title: "Kurumsal",
      sub: [
        {
          text: "Kurumsal 1",
          url: "url1",
        },
        {
          text: "Kurumsal 2",
          url: "url2",
        },
        {
          text: "Kurumsal 3",
          url: "url3",
        },
      ],
    },
    {
      title: "Category",
      sub: [
        {
          text: "Category 1",
          url: "url1",
        },
        {
          text: "Category 2",
          url: "url2",
        },
        {
          text: "Category 3",
          url: "url3",
        },
      ],
    },
    {
      title: "Selection",
      sub: [
        {
          text: "Selection 1",
          url: "url1",
        },
        {
          text: "Selection 2",
          url: "url2",
        },
        {
          text: "Selection 3",
          url: "url3",
        },
      ],
    },
  ];
  const data = { name, setName, footerCategories };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export const useData = () => useContext(Context);

export default Provider;
