/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import Card from "./Card";
import { StateContext } from "../Category/Category.jsx"



const CardList = ({ productsPerPage, products }) => {

  const state = useContext(StateContext);

  useEffect(()=>{
    setCurrentPage(1);
    return
  },[state])

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  function scrollToSection() {
    const targetSection = document.getElementById("product");
    targetSection.scrollIntoView({ behavior: "smooth" });
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToSection();
  };

  return (
    <div className="space-y-8">
      {currentProducts.map((product, index) => (
        <Card key={index} data={product} />
      ))}
      <div className="flex mt-4 justify-center items-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 px-3 py-2 rounded hover:bg-sky-600 hover:text-white transition duration-500 ${
                currentPage === page
                  ? "bg-sky-600 text-white"
                  : "bg-white text-sky-600"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CardList;
