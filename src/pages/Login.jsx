import PopupLogin from "../components/Popup/PopupLogin";

import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const token = Cookies.get("Authorization");
  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className="overflow-hidden">
        <PopupLogin />
      </div>
    );
  }
};

export default Login;
