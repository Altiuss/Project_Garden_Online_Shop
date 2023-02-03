import React from "react";
import s from "./index.module.css";

export default function ProductCard({
  id,
  image,
  price,
  title,
  discont_price,
}) {
  return (
    <div className={s.product_card_container}>
      <img className={s.image} src={`http://localhost:3333${image}`} alt="" />
      <div className={s.price_container}>
      <p className={s.discont_price}>{discont_price}$</p>
      <p className={s.price}>{price}$</p>
      <p className={s.discont}>-7%</p>
      </div>
      <p className={s.title}>{title}</p>
    </div>
  );
}
