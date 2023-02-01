import React from "react";
import s from "./index.module.css";
import gnom from "./media/gnom.png";

export default function Block3() {
  return <section className={s.section}>
    <div className={s.container}>
      <div className={s.left}>
        <img src={gnom} alt="" />
      </div>
      <div className={s.right}>
        <h1>5% off </h1>
        <h2>on the first order</h2>
        <form action="">
          <input type="text" placeholder="+49" />
          <button>Get a discount</button>
        </form>
      </div>

    </div>
  </section>;
}
