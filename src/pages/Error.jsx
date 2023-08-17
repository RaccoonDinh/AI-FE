import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="py-[150px] overflow-hidden flex justify-center item-center text-center space-y-4 flex-col">
      <span className="font-black text-[120px] text-light-gray">
        404
      </span>
      <div className="text-center ">
        <h3 className="text-heading-3">OPPS..., KHÔNG TÌM THẤY TRANG!</h3>
        <p className="uppercase text-body-2">
          trang bạn đang tìm kiếm có thể đã bị xóa hoặc tạm thời không có
        </p>
      </div>
      <Link to={"/"}>
        <button className="p-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500">Trở về trang chủ</button>
      </Link>
    </div>
  );
};

export default Error;
