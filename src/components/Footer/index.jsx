import CompanyProfile from "./CompanyProfile";
import Connections from "./Connections";
import Services from "./Services";
import Contact from "./Contact";
import Copyright from "./Copyright";
import FooterContainers from "./FooterContainers";

const Footer = () => {
  return (
    <div className="relative z-10 overflow-hidden bottom-0 w-auto mx-2 my-4 m-0 p-0 bg-white">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <FooterContainers>
          <CompanyProfile />
          <Connections />
        </FooterContainers>
        <FooterContainers>
          <Services />
          <Contact />
        </FooterContainers>{" "}
      </div>
      <hr className="w-11/12" />
      <div className="flex flex-col lg:flex-row sm:items-center place-content-center md:items-center my-4">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;