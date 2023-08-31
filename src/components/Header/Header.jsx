import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Dropdown from "./Dropdown";
import PopupLogin from "../Popup/PopupLogin";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  const token = Cookies.get("Authorization");

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    setShowPopup(false);
    return;
  }, [token]);

  const location = useLocation();

  return (
    <div className="fixed top-0 z-10 left-0 right-0 bg-gradient-to-r from-blue-300 to-green-300 shadow-xl">
      <div className="flex px-6 md:px-36 py-2 justify-center items-center max-sm:space-x-16">
        <Link to="/">
          <img src="VNS_logo_ngang_1.png" alt="logo" className="h-14 " />
        </Link>

        <div className="sm:flex hidden md:space-x-16 space-x-8 flex-grow justify-center">
          {/* mẫu để làm mấy trang khác trên navbar */}
          <Link to="/">
            <button
              className={`text-black flex hover:text-sky-600 text-center ${
                location.pathname == "/" ? "text-sky-600" : ""
              }`}
            >
              AI Tools
            </button>
          </Link>
          <Link to="/prompts">
            <button
              className={`text-black flex hover:text-sky-600 text-center ${
                location.pathname == "/prompts" ? "text-sky-600" : ""
              }`}
            >
              ChatGPT Prompts
            </button>
          </Link>
          <button className="text-black flex hover:text-sky-600 text-center">
            News
          </button>
          <Dropdown
            contents={[{ name: "Tiếng Việt" }, { name: "English" }]}
            name={"Languages"}
          />
        </div>
        <div className="sm:hidden flex">
          <MenuDropdown />
        </div>

        <div className={`sm:flex hidden }`}>
          {token ? (
            <button
              onClick={() => {
                Cookies.remove("Authorization");
                window.location.reload();
              }}
              className="max-sm:hidden py-2 px-4 rounded-md border border-sky-600 text-sky-600 bg-white hover:text-white hover:bg-sky-600 transition duration-500"
            >
              Đăng xuất
            </button>
          ) : (
            <button
              onClick={togglePopup}
              className="max-sm:hidden py-2 px-4 rounded-md border border-sky-600 text-sky-600 bg-white hover:text-white hover:bg-sky-600 transition duration-500"
            >
              Đăng Nhập
            </button>
          )}
        </div>
        {showPopup && <PopupLogin onClose={togglePopup} />}
      </div>
    </div>
  );
};

export default Header;
