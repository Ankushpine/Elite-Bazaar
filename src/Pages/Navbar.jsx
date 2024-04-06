import React, { useContext } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import style from "../Style/Navabar.module.css";
import { Outlet, NavLink } from "react-router-dom";
import { settingContext } from "../Context/settingContext";

const Navbar = () => {
  const { navbar , cartAdd } = useContext(settingContext);

  return (
    <>

          <div className={navbar ? style.Navbar1 : style.Navbar2 }>
            <NavLink className={style.Link} to={"/"}>
              <h1 className={navbar ? style.Logo1 : style.Logo2 }>EliteBazaar</h1>
            </NavLink>

            <div className={style.RightContents}>
              <NavLink className={style.Link} to={"/cart"}>
                <span className={navbar? style.CartIcon1 : style.CartIcon2}>
                  <FaCartShopping />
                  <span >{cartAdd.length}</span>
                </span>
              </NavLink>

              <NavLink className={style.Link} to={"/settings"}>
                <span className={navbar? style.Settings1 : style.Settings2}>
                  Settings
                  <FaRegSun className="icon" />
                </span>
              </NavLink>
            </div>
          </div>
       

      <Outlet />
    </>
  );
};

export default Navbar;
