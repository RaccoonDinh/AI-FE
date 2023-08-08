import { XMarkIcon } from "../../icons";

/* eslint-disable react/prop-types */
const Popup = ({ isOpen, onClose, link }) => {
  const handleButtonClick = () => {
    window.open(link, "_blank");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col bg-white py-8 px-20 space-y-4 rounded-md items-center justify-center max-w-[800px]">
            <span
              className="rounded-full p-2 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500 justify-end cursor-pointer"
              onClick={onClose}
            >
              <XMarkIcon />
            </span>
            <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-center">
                Tham gia nhóm Zalo
                <span className="font-semibold">
                  {" "}
                  Tổng hợp công cụ AI - Sale - Marketing{" "}
                </span>
                để cập nhật những công nghệ mới nhất!
              </p>
              <div className="p-2 border-2 border-dashed border-sky-600 rounded-lg">
                <img className="w-44" src="QRCode.png" alt="QR Code" />
              </div>
              <a
                href="https://zalo.me/g/antgyd728"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:bg-slate-100 sm:text-lg text-md font-semibold"
              >
                🤖Nhóm Tổng hợp công cụ AI cho công việc thêm dễ dàng🤖
              </a>
              
            </div>
            <button
              className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
              onClick={handleButtonClick}
            >
              Tiếp tục truy cập
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
