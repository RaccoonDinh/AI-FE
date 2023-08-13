import { XMarkIcon } from "../../icons";

/* eslint-disable react/prop-types */
const PopupPayment = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-white py-8 px-20 space-y-4 rounded-md items-center justify-center max-w-[800px]">
        <span
          className="rounded-full p-2 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500 justify-end cursor-pointer"
          onClick={onClose}
        >
          <XMarkIcon />
        </span>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="px-8">
            Vui lòng thực hiện thanh toán để tiếp tục sử dụng dịch vụ
          </p>
          <p>
            <p className="font-semibold">Bước 1:</p> Chuyển khoản thanh toán.
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
          <p>
            <p className="font-semibold">Bước 2:</p> Liên hệ với admin{" "}
            <a
              href="https://zalo.me/g/antgyd728"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:bg-slate-100 sm:text-lg text-md font-semibold"
            >
              tại đây
            </a>{" "}
            gửi biên lai và yêu cầu đăng ký.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupPayment;
