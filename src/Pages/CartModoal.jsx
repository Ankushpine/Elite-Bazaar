import React, { useContext, useEffect, useState } from "react";
import style from "../Style/CartModal.module.css";
import { settingContext } from "../Context/settingContext";

const CartModoal = () => {
  const { cartAdd, setCartAdd } = useContext(settingContext);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setTotal(0);
    setCartAdd([]);
  };

  useEffect(() => {
    if (cartAdd.length != 0) {
      let sum = cartAdd.reduce((acc, ele) => acc + Number(ele.price), 0);
      setTotal(sum.toFixed(2));
    }
  }, [cartAdd]);

  return (
    <div className={style.CartModalCotainer}>
      <div className={style.ClearCartBtn}>
        <button onClick={handleClick}> Clear Cart</button>
      </div>

      {cartAdd.length==0 && <p className={style.NoItem}>No Item in the cart.</p>}

      <div className={style.ItemCotainer}>
        {cartAdd &&
          cartAdd.map((ele, id) => (
            <div key={id} className={style.Item}>
              <p>{ele.title}</p>
              <p>&#x20B9; {ele.price}</p>
            </div>
          ))}
      </div>
      <div className={style.Total}>
        <p>Total Price</p>
        <p>&#x20B9; {total}</p>
      </div>
    </div>
  );
};

export default CartModoal;
