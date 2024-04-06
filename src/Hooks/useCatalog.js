import { useEffect, useState } from "react";
import axios from "axios";

export function useCatalog() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      const FetchData = await axios.get(`https://fakestoreapi.com/products`);
      const productData = await FetchData.data;
      setProducts(productData);
    }
    fetchProducts();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 680 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return {products,responsive};


}
