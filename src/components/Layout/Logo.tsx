import React from "react";
import logoPNG from "../../assets/logo.png";
import classes from "./Logo.module.css";

const Logo: React.FC = () => {
  return <img src={logoPNG} alt="logo github" className={classes.logo} />;
};

export default Logo;
