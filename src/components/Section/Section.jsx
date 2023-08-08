/* eslint-disable react/prop-types */
import CardList from "./CardList";

const Section = (props) => {
  const { data } = props;

  return (
    <section id="product" className="w-full">
      <div className="hidden pt-8 text-center font-bold text-lg sm:flex">
        <p className="basis-1/3">Công cụ</p> <p className="basis-1/3">Mô tả</p>
      </div>
      <div className="sm:hidden w-full  flex item-center justify-center">
        <p className="pt-8 text-center font-bold text-lg">Công cụ</p>
      </div>

      <div className=" py-8">
        <CardList productsPerPage={8} products={data} />
      </div>
    </section>
  );
};

export default Section;
