import Footer from "../components/Footer/index";
import Header from "../components/Header/Header";
import Prompts from "../components/Prompts/Prompts";
import PopupPayment from "../components/Popup/PopupPayment";
import { userApi } from "../api/user.api";

import { useState, useEffect } from "react";

const ChatGPTPrompts = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const userf = await userApi.getUser();

        if (userf) {
          setUser(userf);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleGetUser();
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div>
        <img
          src="banner.png"
          alt="banner"
          className="max-sm:hidden pt-[72px]"
        />
        <img src="banner_2.png" alt="banner" className="sm:hidden pt-[72px]" />
      </div>
      {user ? (
        user.active ? (
          <Prompts />
        ) : (
          <PopupPayment />
        )
      ) : (
        <p className="text-center p-4 bg-slate-200 font-semibold text-md">
          Loading user! Wait a minutes
        </p>
      )}
      <Footer />
    </div>
  );
};

export default ChatGPTPrompts;
