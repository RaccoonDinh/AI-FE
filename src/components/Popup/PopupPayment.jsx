/* eslint-disable no-unused-vars */
import { PayPalButton } from "react-paypal-button-v2";

import { XMarkIcon } from "../../icons";
import { useEffect, useState } from "react";
// import paymentApi from "../../api/payment.api";???
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PopupPayment = ({ onClose }) => {
  const [sdkReady, setSdkReady] = useState(false);
  const [method, setMethod] = useState(false);

  const addPaypalScript = async () => {
    // const data = await paymentApi.getClientID();
    const data =
      "AVxdzAI4rxBH-NabjIj1ho9ClnS0gwOsavU3MHxz-fAFTKmAAu92boOwKyATpZEgFCtSq86Gx5iClYDw";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!window.paypal) {
      addPaypalScript();
    } else {
      setSdkReady(true);
    }
  }, []);

  const handleClick = (e) => {
    setMethod(!method);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white py-8 sm:px-20 px-4 space-y-4 rounded-md items-center justify-center max-w-[800px]">
        {onClose ? (
          <span
            className="rounded-full p-2 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500 justify-end cursor-pointer"
            onClick={onClose}
          >
            <XMarkIcon />
          </span>
        ) : (
          <Link to={"/"} className="rounded-full flex item-center justify-center p-2 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500 justify-end cursor-pointer">
            <span>
              <XMarkIcon />
            </span>
          </Link>
        )}
        <div className="flex flex-col sm:space-x-4 item-center justify-center text-center">
          <p className="sm:px-8 px-2">
            Vui lòng thực hiện thanh toán để tiếp tục sử dụng dịch vụ
          </p>

          {method && (
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p>
                <p className="font-semibold">Bước 1:</p> Chuyển khoản thanh toán
                268.000VNĐ.
              </p>
              <div className="p-2 border-2 border-dashed border-sky-600 rounded-lg">
                <img className="w-44" src="payment.png" alt="QR Code" />
              </div>
              <div className="flex px-4 sm:px-20 md:w-full w-screen">
                <p className="text-slate-400">Số tài khoản</p>
                <p className="flex-grow" />
                <p className="">6363638686</p>
              </div>
              <div className="flex px-4 sm:px-20 md:w-full w-screen">
                <p className="text-slate-400">Tên chủ tài khoản</p>
                <p className="flex-grow md:w-10" />
                <p className="">CONG TY CP TU VAN VA GIAI PHAP VNS</p>
              </div>
              <div className="flex px-4 sm:px-20 md:w-full w-screen">
                <p className="text-slate-400">Tên ngân hàng</p>
                <p className="flex-grow" />
                <p className="">Ngân hàng TMCP Á Châu &#40;ACB&#41;</p>
              </div>
              <div>
                <p className="font-semibold">Bước 2:</p> Liên hệ với admin{" "}
                <a
                  href="https://zalo.me/0332120339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:bg-slate-100 sm:text-lg text-md font-semibold"
                >
                  tại đây
                </a>{" "}
                gửi biên lai và yêu cầu đăng ký.
              </div>
            </div>
          )}

          {!method && (
            <div className="flex justify-center item-center flex-col">
              <div className="flex max-sm:flex-col space-y-2 pt-2 justify-center item-center">
                <button
                  onClick={handleClick}
                  className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white max-md:bg-sky-600 max-md:text-white transition duration-500"
                >
                  Ngân hàng địa phương
                </button>
              </div>
              <p className="font-semibold pt-4">Hoặc</p>
              <div className="pt-4 space-y-4 text-center">
                <p>Thanh toán với Paypal</p>
                {sdkReady && (
                  <PayPalButton
                    amount="10"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      toast.success(
                        "Transaction completed by " +
                          details.payer.name.given_name
                      );
                      // gọi lại API để lưu trữ các transactions
                      // OPTIONAL: Call your server to save the transaction
                      // return fetch("/paypal-transaction-complete", {
                      //   method: "post",
                      //   body: JSON.stringify({
                      //     orderID: data.orderID,
                      //   }),
                      // });
                      return;
                    }}
                    onError={() => {
                      toast.error(
                        "Somethings went wrong, check and try again!"
                      );
                    }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupPayment;
