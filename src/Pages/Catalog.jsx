import React, { useContext } from "react";
import { settingContext } from "../Context/settingContext";
import { useCatalog } from "../Hooks/useCatalog";
import style from "../Style/Catalog.module.css"

import { ProductCardCarousel,ProductCardList,ProductModal } from "../Components/Catalog";

const Catalog = () => {
  const { products } = useCatalog();
  const { productView, cartAdd, setCartAdd, modalData, setModalData } =
    useContext(settingContext);


  return (
    <>
    <p className={style.Heading} >Welcome to Elite Bazar! Check out the latest brands.</p>
      {productView ? (
        <>
          {modalData && <ProductModal />}
          <ProductCardCarousel />
        </>
      ) : (
        <>
         {modalData && <ProductModal />}
          <ProductCardList products={products} />
        </>
      )}
    </>
  );
};

export default Catalog;
