/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

import { ChevronDownIcon } from "../../icons";


const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const { contents, name } = props;

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
        {name}
        <div  className="pt-1"><ChevronDownIcon /></div>
      </button>
      {isOpen && (
        <ul className="absolute top-10 left-0 bg-white p-2 rounded shadow w-auto whitespace-nowrap space-y-2 px-4">
          {contents.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-sky-600" onClick={toggleDropdown}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
