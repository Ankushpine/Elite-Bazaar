import React from "react";
import style from "../../Style/Catalog.module.css";
import { useCart } from "../../Hooks/useCart";

const ProductCardList = () => {

    const { products, onClickCard, CartButton, productCard , cartAdd } = useCart();

  return (
    <div className={style.cardContainer} >
    {products && 
        products.map((product) => (
          <div key={product.id} className={productCard ? style.Card1: style.Card2}>
            <img src={product.image} alt={product.title} onClick={() => onClickCard(product)}/>
            <div className={style.DetailsContainer}>
              <p className={style.Title}>{product.title}</p>
              <span className={style.Price}> Price : &nbsp; &#x20B9; <span>{product.price}</span></span>

              {cartAdd.some((ele) => ele.id === product.id) ? (
                <button onClick={() => CartButton(product)} className={productCard ? style.RemoveCartBtn1 : style.RemoveCartBtn2 }>
                  Remove from Cart
                </button>
              ) : (
                <button onClick={() => CartButton(product)} className={productCard ? style.AddCartBtn1 : style.AddCartBtn2 }>
                  Add To Cart
                </button>
              )}

            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCardList;
