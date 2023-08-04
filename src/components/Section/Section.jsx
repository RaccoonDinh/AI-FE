/* eslint-disable react/prop-types */
// import Card from "./Card";
import CardList from "./CardList";

const Section = (props) => {
  const { data } = props;

  return (
    <section
      id="product"
      className="w-full"
    >
      <div className=" pt-8 text-center font-bold text-lg flex">
        <p className="basis-1/3">Công cụ</p> <p className="basis-1/3">Mô tả</p>
      </div>
      <div className=" py-8">
        <CardList productsPerPage={8} products={data} />
      </div>
    </section>
  );
};

export default Section;
