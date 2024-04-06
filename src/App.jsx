import React, { useState } from "react";
import { Navbar, Catalog, Settings, CartModoal ,Error } from "./Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { settingContext } from "./Context/settingContext";

const App = () => {
  
  const [navbar, setNavbar] = useState(true);
  const [productView, setProductView] = useState(true);
  const [productCard,setProductCard] = useState(true);
  const [cartAdd, setCartAdd] = useState([]);
  const [modalData, setModalData] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error/>,
      children: [
        { index: true, element: <Catalog /> },
        { path: "settings", element: <Settings /> },
        { path: "cart", element: <CartModoal /> },
      ],
    },
  ]);

  return (
    <>
      <settingContext.Provider
        value={{
          navbar,
          setNavbar,
          productView,
          setProductView,
          productCard,
          setProductCard,
          cartAdd,
          setCartAdd,
          modalData,
          setModalData,
        }}
      >
        <RouterProvider router={router} />
      </settingContext.Provider>
    </>
  );
};

export default App;
