/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import ExcelJS from "exceljs";

import Header from "../components/Header/Header";
import PopupAdmin from "../components/Popup/PopupAdmin";
import { userApi } from "../api/user.api";
import UserCard from "../components/UserCard/UserCard";

const Admin = () => {
  const token = Cookies.get("Authorization");

  const [popup, setPopup] = useState(true);
  const [phone, setPhone] = useState("");

  const [userArr, setUserArr] = useState();

  const [user, setUser] = useState();

  const [toggle, setToggle] = useState(false);

  const handleFetchUser = async () => {
    const res = await userApi.getAllUser([]);
    setUserArr(res);
    return;
  };

  const handleToggle = () => {
    setUser();
    setToggle(!toggle);
    return;
  };

  useEffect(() => {
    Cookies.remove("Authorization");
    return;
  }, []);

  useEffect(() => {
    handleFetchUser();
    if (token) {
      setPopup(false);
    }
    if (!token) {
      setPopup(true);
    }
  }, [token]);

  const validateNumber = (e) => {
    const value = e.target.value.trim();
    const numberPattern = /^[0-9]*$/;

    if (numberPattern.test(value)) {
      if (value.length === 10) {
        e.target.setCustomValidity("");
      }
      setPhone(value);
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleFind = () => {
    if (userArr) {
      userArr.map((user, index) => {
        if (user.phone == phone) {
          setUser(userArr[index]);
          return;
        }
      });
      return;
    }
    return;
  };

  const handleExport = async (data) => {
    handleFetchUser();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Dữ liệu");

    // Định dạng header
    const header = ["Tên", "Số điện thoại", "Email", "Địa chỉ", "Đã Active?"];
    worksheet.addRow(header);

    // Thêm dữ liệu từ mảng data
    data.forEach((item) => {
      const rowData = [
        item.name,
        item.phone,
        item.email,
        item.address,
        item.active,
      ];
      worksheet.addRow(rowData);
    });

    const blob = await workbook.xlsx.writeBuffer();
    const blobUrl = URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", "du-lieu.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {popup && <PopupAdmin />}
      {token && (
        <div className="overflow-hidden">
          <Header />
          <div className=" pt-[80px] flex flex-col item-center justify-center w-full flex-center">
            <div className="space-y-4 pb-4 flex flex-col justify-center item-center">
              <div className="space-y-4 flex flex-col item-center justify-center">
                <input
                  className=" border-2 p-2 focus:border-black"
                  type="text"
                  placeholder="Số điện thoại"
                  maxLength={10}
                  value={phone}
                  onChange={validateNumber}
                ></input>

                <button
                  onClick={handleFind}
                  className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                >
                  Tìm kiếm
                </button>
              </div>
              <button
                onClick={handleToggle}
                className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
              >
                Show
              </button>
              <div className="space-y-4">
                {userArr && toggle && !user
                  ? userArr.map((user, index) => (
                      <UserCard key={index} user={user} />
                    ))
                  : user && <UserCard user={user} />}
              </div>
              <button
                onClick={() => handleExport(userArr)}
                className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
