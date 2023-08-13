import { useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import adminApi from "../../api/admin.api";

const PopupAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginButton = async (e) => {
    try {
      e.preventDefault();

      if (username === "" || password === "") {
        toast.error("Vui lòng điền đầy đủ Username và mật khẩu!");
        return;
      }

      const account = {
        username,
        password,
      };

      console.log(account);
      const res = await adminApi.login(account);
      Cookies.set("Authorization", res.token, { expires: 7 });
      toast.success(`Welcome ${res.name} back!!`);
    } catch (error) {
      toast.error("Username hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-screen">
        <div className="flex flex-col bg-white py-8 px-20 space-y-4 rounded-md items-center justify-center ">
          <p className="text-lg font-semibold text-slate-500">
            Vui lòng đăng nhập để tiếp tục
          </p>

          <div className="sm:flex w-full justify-center space-x-20">
            <div className="flex flex-col space-y-2">
              <form
                onSubmit={loginButton}
                className="flex flex-col items-center flex-1 space-y-4"
              >
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="text"
                  placeholder="Username"
                  maxLength={10}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="w-full p-4 border-2 focus:border-black"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAdmin;
