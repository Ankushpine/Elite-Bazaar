import React, { useContext } from "react";
import style from "../Style/Settings.module.css";
import { settingContext } from "../Context/settingContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { setNavbar, setProductView ,setProductCard } = useContext(settingContext);
  const navigate = useNavigate();

  const onClickNavabr = () => {
    setNavbar((pre) => !pre);
    navigate("/");
  };

  const onClickItemView = () => {
    setProductView((pre) => !pre);
    navigate("/");
  };

  const onClickProductCard = () => {
    setProductCard((pre) => !pre);
    navigate("/");
  };

  return (
    <div className={style.Settings}>
      <p onClick={onClickNavabr}>Click to Change Navbar View</p>
      <p onClick={onClickItemView}>Click to Change Items View</p>
      <p onClick={onClickProductCard} >Click to Change Product Card View</p>
    </div>
  );
};

export default Settings;
