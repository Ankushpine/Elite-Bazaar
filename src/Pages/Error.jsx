import React, { useEffect } from "react";
import style from "../Style/Error.module.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => 
      navigate(-1)
    , 2500);
  },[]);

  return (
    <div className={style.Error}>
      <h1>404</h1>
      <h3>Page not found!</h3>
    </div>
  );
};

export default Error;
