import { userApi } from "../../api/user.api";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const active = async () => {
    try {
      if (user) {
        const res = await userApi.activeUser(user._id);
        if (res) {
          toast.success(`Active user ${user.name} thành công!`);
        }
        return;
      }
      return;
    } catch (error) {
      toast.error(`Active user ${user.name} thất bại!`);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col border border-slate-500 py-2 item-center md:space-x-10 sm:space-x-3">
      <p>Tên: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Số điện thoại: {user.phone}</p>
      <p>Địa chỉ: {user.address}</p>
      <div className="max-sm:pb-6">
        <button
          onClick={active}
          className="absolute right-0 px-2 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-500"
        >
          active
        </button>
      </div>
    </div>
  );
};

export default UserCard;
