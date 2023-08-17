/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import PopupPayment from "./components/Popup/PopupPayment";

const App = () => {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          className: "z-[500]",
        }}
      />
    </>
  );
};

export default App;
