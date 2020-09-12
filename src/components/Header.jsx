import React from "react";
import "../assets/styles/components/Header.scss";
import backgroudHeader from "../assets/images/bg-header-desktop.svg";

const Header = () => <header className="header">{<img src={backgroudHeader} alt="" />}</header>;

export default Header;
