import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[240px] text-light-gray">
        404
      </span>
      <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 whitespace-nowrap">
        <h3 className="text-heading-3">OPPS..., KHÔNG TÌM THẤY TRANG!</h3>
        <p className="uppercase text-body-2">
          trang bạn đang tìm kiếm có thể đã bị xóa hoặc tạm thời không có
        </p>
      </div>
      <button className="" onClick={handleBackToHomePage}>
        backback
      </button>
    </div>
  );
};

export default Error;
