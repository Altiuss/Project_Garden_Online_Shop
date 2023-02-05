import React from "react";
import s from "./index.module.css";

export default function CartCard({id, name, price, image, discont_price, count}) {
  return <div>
    <img src={`http://localhost:3333${image}`} alt="foto" />
    <p>{name}</p>
    <div>
      <button>-</button>
      <p>{count}</p>
      <button>+</button>
    </div>
    <p>{discont_price}</p>
    <p>{price}</p>

  </div>;
}
