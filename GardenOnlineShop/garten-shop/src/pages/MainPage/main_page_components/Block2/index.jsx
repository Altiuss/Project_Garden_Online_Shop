import React from "react";
import s from "./index.module.css";

export default function Block2() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.block}>
          <h1>Catalog</h1>
         
            <button>All categories </button>
         
        </div>
        <div className={s.catalog}></div>
      </div>
    </section>
  );
}
