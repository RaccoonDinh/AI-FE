import CompanyProfile from "./CompanyProfile";
import Connections from "./Connections";
import Services from "./Services";
import Contact from "./Contact";
import Copyright from "./Copyright";
import FooterContainers from "./FooterContainers";

const Footer = () => {
  return (
    <div className="overflow-hiddenw-auto px-2 py-4 m-0 p-0 bg-white">
      <div className="flex flex-col md:flex-row lg:flex-row max-md:item-center max-md:justify-center max-md:text-center">
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
