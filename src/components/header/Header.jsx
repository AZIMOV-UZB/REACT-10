import React from "react";
import { NavLink } from "react-router-dom";
import rasm from "../../assets/logo.svg"
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <header className=" bg-slate-100 h-20">
      <div className="h-full flex gap-8 items-center container navbar__collection  text-xl font-bold mx-auto px-8">
        <div className=" flex-1 nav__img w-28">
        <NavLink className="text-2xl" to={"/"}>
          <img src={rasm} alt="foto" />
        </NavLink>
        </div>
        <div className="h-full flex gap-8 items-center nav__bag  text-xl font-bold mx-auto px-8">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishlist"}>Wishlist</NavLink>
        <NavLink to={"/Cart"}>Cart</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        </div>
        <div className="menu">
        <TiThMenu  className="text-3xl"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
