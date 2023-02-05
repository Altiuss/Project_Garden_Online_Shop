import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";
import s from "./index.module.css";



export default function CartPage() {

  const cart = useSelector((state) => state.cart);


  console.log(cart);





  return <section className={s.cart_page}>
<h1 className={s.h}>Shopping cart</h1>
  </section>;
}

