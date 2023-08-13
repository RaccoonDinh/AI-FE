import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import { navItems } from "../../constants";
import PopupLogin from "../Popup/PopupLogin";

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

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-300 to-green-300 shadow-xl">
      <div className="flex px-6 md:px-36 py-2 justify-center items-center">
        <Link to="/">
          <img src="VNS_logo_ngang_1.png" alt="logo" className="h-14 " />
        </Link>
        <div className="sm:flex hidden md:space-x-12 space-x-2 flex-grow justify-center">
          <Dropdown contents={navItems[0].contents} name={navItems[0].name} />
          <Dropdown contents={navItems[1].contents} name={navItems[1].name} />
          <Dropdown contents={navItems[2].contents} name={navItems[2].name} />
          <Dropdown contents={navItems[3].contents} name={navItems[3].name} />
        </div>
        <div className={`${token ? "hidden" : ""}`}>
          <button
            onClick={togglePopup}
            className="max-sm:hidden py-2 px-4 rounded-md border border-sky-600 text-sky-600 bg-white hover:text-white hover:bg-sky-600 transition duration-500"
          >
            Đăng Nhập
          </button>
        </div>
        {showPopup && <PopupLogin onClose={togglePopup} />}
      </div>
    </div>
  );
};

export default Header;
