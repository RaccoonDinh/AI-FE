import Category from "./components/Category/Category";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

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
    <div className="overflow-hidden">
      <Header />
      <div>
        <img src="banner.png" alt="banner" className="pt-[72px]" />
      </div>
      <Category />
      <Footer />
      <Toaster
        toastOptions={{
          className: "z-[500]",
        }}
      />
    </div>
  );
};

export default App;
