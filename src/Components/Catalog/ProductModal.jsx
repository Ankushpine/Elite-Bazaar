import React, { useContext, useState } from "react";
import style from "../../Style/ProductModal.module.css";
import { FaTimes } from "react-icons/fa";
import { settingContext } from "../../Context/settingContext";

const ProductModal = () => {
  const { modalData, setModalData } = useContext(settingContext);

  return (
    <div className={style.ProductModalContainer}>
      <div className={style.ProductModal}>
        <div className={style.ProductModalImage}>
          <img src={modalData.image} alt="" />
        </div>
        <div className={style.ProductModalContent}>
          <p className={style.title}>{modalData.title}</p>
          <p className={style.category}>Category : {modalData.category}</p>
          <p className={style.price}>
            Price: &nbsp; &#x20B9; {modalData.price}
          </p>
          <p className={style.rating}>Rating: {modalData.rating.rate}</p>
          <p className={style.description}>
            Description: <br />
            {modalData.description}
          </p>
        </div>

        <span className={style.Cross} onClick={()=>setModalData(null)}>
          <FaTimes />
        </span>
      </div>
    </div>
  );
};

export default ProductModal;
