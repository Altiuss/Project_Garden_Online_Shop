import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);



  // console.log(cart);
  // console.log(cart.length);
  // console.log(cart.price);

  const total = cart
    .reduce((prev, el) => prev + el.discont_price * el.count, 0)
    .toFixed(2);

  return (
    <section className={s.cart_page}>
      <h1 className={s.h}>Shopping cart</h1>
      <div className={s.cart_page_title}>
        <p></p>
        <p>
          Back to the store
          <span className={s.span}>
            <Link className={s.link} to="/categories">
              &gt;
            </Link>
          </span>
        </p>
      </div>

      <div className={s.cart_section}>
        <div className={s.cart_container}>
          {cart.map((el) => (
            <CartCard key={el.id} {...el} />
          ))}
        </div>
        <div className={s.summary_container}>
          <h2>Order details</h2>
          <p className={s.total}>Total</p>
          <p className={s.sum}>
            {total}

            <span>$</span>
          </p>
          <form className={s.order_form}>
            <input type="nummber" placeholder="Phone number" />
            <button>Order</button>
          </form>
        </div>
      </div>
    </section>
  );
}
