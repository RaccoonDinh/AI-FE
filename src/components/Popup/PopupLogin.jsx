/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import validator from "validator";

import { authenticateApi } from "../../api/authenticate.api";
import { XMarkIcon } from "../../icons";
import AddressPicker from "../AddressPicker/AddressPicker";

/* eslint-disable react/prop-types */
const PopupLogin = ({ onClose }) => {
  const [lPhone, setLPhone] = useState("");
  const [lPassword, setLPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState(true);

  const [toggleM, setToggleM] = useState(true);

  const handleData = (data) => {
    setAddress(data.name);
  };

  const loginButton = async (e) => {
    try {
      e.preventDefault();

      if (lPhone === "" || lPassword === "") {
        toast.error("Vui lòng điền đầy đủ số điện thoại và mật khẩu!");
        return;
      }

      const account = {
        lPhone,
        lPassword,
      };

      console.log(account);
      const res = await authenticateApi.login(account);
      Cookies.set("Authorization", res.token, { expires: 7 });
      toast.success(`Welcome ${res.name} back!!`);
    } catch (error) {
      toast.error("Số điện thoại hoặc mật khẩu không đúng!");
    }
  };

  const signUpButton = async (e) => {
    try {
      e.preventDefault();

      if (
        phone === "" ||
        password === "" ||
        email === "" ||
        name === "" ||
        address === ""
      ) {
        toast.error("Vui lòng điền đầy đủ thông tin!");
        return;
      }
      if (phone.length != 10) {
        toast.error("Số điện thoại không hợp lệ!");
        return;
      }
      if (!isValid) {
        toast.error("Email không hợp lệ!");
        return;
      }
      if (address == "---Chọn tỉnh thành---") {
        toast.error("Vui lòng chọn tỉnh thành!");
        return;
      }

      const account = {
        name,
        email,
        phone,
        password,
        address,
      };

      console.log(account);
      const res = await authenticateApi.register(account);
      Cookies.set("Authorization", res.token, { expires: 7 });
      toast.success(`Chào ${res.name}! Đăng ký thành công!!`);
    } catch (error) {
      toast.error("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin");
    }
  };

  const validateNumber = (e) => {
    const value = e.target.value.trim();
    const numberPattern = /^[0-9]*$/;

    if (numberPattern.test(value)) {
      if (value.length === 10) {
        e.target.setCustomValidity("");
      }
      setLPhone(value);
    } else {
      e.target.setCustomValidity("");
    }
  };

  const validateNumber2 = (e) => {
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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(validator.isEmail(value));
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-screen">
        <div className="flex flex-col bg-white py-8 px-20 space-y-4 rounded-md items-center justify-center ">
          <span
            className="rounded-full p-2 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500 justify-end cursor-pointer"
            onClick={onClose}
          >
            <XMarkIcon />
          </span>

          <p className="text-lg font-semibold text-slate-500">
            Vui lòng đăng nhập để tiếp tục
          </p>

          <div className="sm:flex hidden w-full justify-center space-x-20">
            <div className="flex flex-col space-y-2">
              <p className="text-xl font-bold">Đăng nhập:</p>
              <form
                onSubmit={loginButton}
                className="flex flex-col items-center flex-1 space-y-4"
              >
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="text"
                  placeholder="Số điện thoại"
                  maxLength={10}
                  value={lPhone}
                  onChange={validateNumber}
                />
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="password"
                  placeholder="Mật khẩu"
                  value={lPassword}
                  onChange={(e) => setLPassword(e.target.value)}
                />
                <div className="flex items-center justify-end w-full">
                  <p className="text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2 hover:text-gray-500">
                    Quên mật khẩu?
                  </p>
                </div>
                <button
                  type="submit"
                  className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                >
                  Đăng nhập
                </button>
              </form>
            </div>

            <span className="text-slate-500 pt-20">Hoặc</span>

            <div className="flex flex-col space-y-2">
              <p className="text-xl font-bold">Đăng ký:</p>
              <form
                onSubmit={signUpButton}
                className="flex flex-col items-center flex-1 space-y-4"
              >
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                />
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="text"
                  placeholder="Số điện thoại"
                  maxLength={10}
                  value={phone}
                  onChange={validateNumber2}
                />
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="text"
                  placeholder="Tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <AddressPicker sendDataToParent={handleData} />
                <button
                  type="submit"
                  className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>

          <div className="sm:hidden flex flex-col item-center justify-center">
            {toggleM && (
              <div className="z-50 flex flex-col item-center justify-center">
                <div className="flex flex-col space-y-2">
                  <p className="text-xl font-bold">Đăng nhập:</p>
                  <form
                    onSubmit={loginButton}
                    className="flex flex-col items-center flex-1 space-y-4"
                  >
                    <input
                      className="w-full p-4 border-2 focus:border-black"
                      type="text"
                      placeholder="Số điện thoại"
                      maxLength={10}
                      value={lPhone}
                      onChange={validateNumber}
                    />
                    <input
                      className="w-full p-4 border-2 focus:border-black"
                      type="password"
                      placeholder="Mật khẩu"
                      value={lPassword}
                      onChange={(e) => setLPassword(e.target.value)}
                    />
                    <div className="flex items-center justify-end w-full">
                      <p className="text-sm font-medium underline cursor-pointer whitespace-nowrap underline-offset-2 hover:text-gray-500">
                        Quên mật khẩu?
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                    >
                      Đăng nhập
                    </button>
                  </form>
                </div>

                <span className="w-full text-center text-slate-500 underline decoration-solid py-4">
                  Hoặc
                </span>

                <div className="flex item-center justify-center">
                  <button
                    onClick={() => setToggleM(!toggleM)}
                    className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            )}
            {!toggleM && (
              <>
                <div className="flex flex-col space-y-2">
                  <p className="text-xl font-bold">Đăng ký:</p>
                  <form
                    onSubmit={signUpButton}
                    className="flex flex-col items-center flex-1 space-y-4"
                  >
                    <input
                      className="w-full p-4 border-2 focus:border-black"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <input
                      className="w-full p-4 border-2 focus:border-black"
                      type="text"
                      placeholder="Số điện thoại"
                      maxLength={10}
                      value={phone}
                      onChange={validateNumber2}
                    />
                    <input
                      className="w-full p-4 border-2 focus:border-black"
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      className="w-full p-4 border-2 focus:border-black"
                      type="text"
                      placeholder="Tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <AddressPicker sendDataToParent={handleData} />
                    <button
                      type="submit"
                      className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                    >
                      Đăng ký
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupLogin;
