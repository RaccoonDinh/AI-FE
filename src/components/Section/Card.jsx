/* eslint-disable react/prop-types */
import { useState } from "react";
import Popup from "../Popup/Popup";

const Card = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const { data } = props;

  return (
    <div className="sm:flex min-h-[170px] px-4 py-4 items-center border-2 rounded-lg w-full shadow-2xl bg-white">
      <div className="basis-64 flex items-center">
        <img src={data.thumbnail} alt={data.name} className="w-36" />
        <p className="basis-1/2 text-center font-medium">{data.name}</p>
      </div>
      <p className="basis-[691px] px-4">{data.description}</p>
      <div>
        <button
          className="whitespace-nowrap py-2 px-4 rounded-md border border-sky-600 text-sky-600 bg-white hover:text-white hover:bg-sky-600 transition duration-500"
          onClick={togglePopup}
        >
          Truy cập
        </button>
      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={togglePopup} link={data.link} />}
    </div>
  );
};

export default Card;
