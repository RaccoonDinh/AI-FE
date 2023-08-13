import Category from "../components/Category/Category";
import Footer from "../components/Footer/index";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div>
        <img
          src="banner.png"
          alt="banner"
          className="max-sm:hidden pt-[72px]"
        />
        <img src="banner_2.png" alt="banner" className="sm:hidden pt-[72px]" />
      </div>
      <Category />
      <Footer />
    </div>
  );
};

export default Home;
