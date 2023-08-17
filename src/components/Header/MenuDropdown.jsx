/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import { MenuIcon } from "../../icons";
import { navItems } from "../../constants";
import Dropdown from "./Dropdown";

const MenuDropdown = () => {
  const token = Cookies.get("Authorization");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const { contents, name } = navItems;

  useEffect(() => {
    // Sử dụng event listener để theo dõi sự kiện click toàn cục
    const handleGlobalClick = (event) => {
      // Kiểm tra xem dropdownRef có tồn tại và event.target có phải là một phần tử bên ngoài dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Đóng dropdown nếu bấm ra ngoài
      }
    };

    // Thêm event listener khi component được mount và loại bỏ nó khi component unmount
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-black flex hover:text-sky-600 text-center"
      >
        <div className="pt-1">
          <MenuIcon />
          {name}
        </div>
      </button>
      {isOpen && (
        <ul className="absolute top-10 right-0 bg-white p-2 rounded shadow w-auto whitespace-nowrap space-y-2 px-4">
          {contents.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-sky-600"
              onClick={toggleDropdown}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          <li className="cursor-pointer hover:text-sky-600">
            <Dropdown
              contents={[{ name: "Tiếng Việt" }, { name: "English" }]}
              name={"Languages"}
              css={true}
            />
          </li>
          {token && (
            <li
              className="cursor-pointer hover:text-sky-600"
              onClick={() => {
                Cookies.remove("Authorization");
                window.location.reload();
              }}
            >
              Đăng xuất
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default MenuDropdown;
