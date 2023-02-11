import React from "react";
import s from "./index.module.css";
import { useSelector } from "react-redux";
import logo from "./media/image 1.png";
import { Link } from "react-router-dom";

import { SlHandbag } from "react-icons/sl";

export default function Nav() {

  const cart = useSelector((state) => state.cart);
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  
  return (
    <header>
      <nav className={s.nav}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to="categories" className={s.catalog}>
          <button>Catalog</button>
        </Link>
        <Link to="categories" className={s.category}>
        Catalogs
        </Link>
        <p className={s.cupons}>Coupon</p>
        <p className={s.discount}>Sale</p>
        <p className={s.contact}>Contact</p>
        <Link to="cart" >
        <p className={s.cart}>
          <span className={s.cart_count}>{totalCount}</span>
          <SlHandbag />
        </p>
        </Link>
      </nav>
    </header>
  );
}
