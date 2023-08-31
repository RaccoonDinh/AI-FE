import CompanyProfile from "./CompanyProfile";
import Contact from "./Contact";
import Copyright from "./Copyright";
import FooterContainers from "./FooterContainers";

const Footer = () => {
  return (
    <div className="overflow-hiddenw-auto px-2 py-4 m-0 p-0 bg-gradient-to-t from-violet-200 to-violet-white">
      <hr className="w-full" />
      <div className="flex flex-col md:flex-row lg:flex-row item-center justify-center text-center">
        <FooterContainers>
          <CompanyProfile />
        </FooterContainers>
        <FooterContainers>
          <Contact />
        </FooterContainers>
      </div>
      <hr className="w-full" />
      <div className="flex items-center justify-center text-center my-4">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
