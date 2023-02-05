import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";

import s from "./index.module.css";

export default function CartPage() {
  return <section className={s.cart_page}>
<h1>Shopping cart</h1>
  </section>;
}
