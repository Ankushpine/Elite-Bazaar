import { useContext } from "react";
import { useCatalog } from "./useCatalog";
import { settingContext } from "../Context/settingContext";

export function useCart() {
  const { products , responsive } = useCatalog();
  const { productCard, cartAdd, setCartAdd, setModalData } = useContext(settingContext);

  const onClickCard = (data) => {
    setModalData(data);
  };

  const CartButton = (product) => {
    let present = cartAdd.some((ele) => ele.id === product.id);
    if (present) {
      let nerCart = cartAdd.filter((ele) => ele.id !== product.id);
      setCartAdd(nerCart);
    } else {
      setCartAdd([product, ...cartAdd]);
    }
  };

  return { products, onClickCard, CartButton, productCard ,cartAdd ,responsive};
}
