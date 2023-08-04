import { useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";

import Section from "../Section/Section";
import { TOOLS } from "../../constants";
import PopupLogin from "../Popup/PopupLogin";

export const StateContext = createContext();

const Category = () => {
  const token = Cookies.get("Authorization");

  const [cate, setCate] = useState();
  const [state, setState] = useState(1);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setShowPopup(false);
    return;
  }, [token]);

  const handleClick = (data, index) => {
    if (!token) {
      togglePopup();
      return;
    }
    setCate(data);
    setState(index);
  };

  return (
    <StateContext.Provider value={state}>
      <div className="px-44 py-4 space-y-4 bg-gradient-to-b from-violet-200 to-violet-100">
        {showPopup && <PopupLogin onClose={togglePopup} />}
        <p className="text-center font-bold text-3xl">Danh Mục</p>
        <div className="flex flex-wrap space-x-8 justify-center items-center space-y-2">
          {TOOLS.map((tool, index) => (
            <button
              key={index}
              className={`border border-sky-600 rounded-full p-2 hover:text-white hover:bg-sky-600 transition duration-500 ${
                tool.data == cate && token
                  ? "text-white bg-sky-600"
                  : "bg-white"
              }`}
              onClick={() => handleClick(tool.data, index)}
            >
              {tool.name}
            </button>
          ))}
          {token && cate && <Section data={cate} />}
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default Category;
