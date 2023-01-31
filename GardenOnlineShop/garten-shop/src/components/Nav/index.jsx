import React from "react";
import s from "./index.module.css";
import logo from "./media/image 1.png";
import { Link } from "react-router-dom";

import { SlHandbag } from "react-icons/sl";

export default function Nav() {
  return (
    <header>
      <nav className={s.nav}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to="catalog" className={s.catalog}>
          <button>Каталог</button>
        </Link>
        <p className={s.category}>Категории</p>
        <p className={s.cupons}>Купон</p>
        <p className={s.discount}>Акции</p>
        <p className={s.contact}>Контакты</p>
        <p className={s.cart}>
          <SlHandbag />
        </p>
      </nav>
    </header>
  );
}
