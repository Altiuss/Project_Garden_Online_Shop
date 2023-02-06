import React from "react";
import s from "./index.module.css";
import { AiOutlineMinus, AiOutlinePlus,AiOutlineClose } from "react-icons/ai";

export default function CartCard({
  id,
  title,
  price,
  image,
  discont_price,
  count,
}) {
  return (
    <div className={s.cart_card}>
      <img src={`http://localhost:3333${image}`} alt="foto" />
      <div>
        <p className={s.title}>{title}</p>
        <div className={s.count_container}>
          <p><AiOutlineMinus/></p>
          <p>{count}</p>
          <p><AiOutlinePlus/></p>
        </div>
      </div>
      <div className={s.price_container}>
         <p className={s.discont_price}>{discont_price}
         <span className={s.dolar}>$</span> </p>
         <p className={s.price}>{price}$</p>
         <p className={s.delete_btn}><AiOutlineClose/></p>
      </div>
    </div>
  );
}
