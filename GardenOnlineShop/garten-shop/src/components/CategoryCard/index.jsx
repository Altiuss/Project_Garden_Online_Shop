import React from "react";
import s from "./index.module.css";

export default function CategoryCard({ id, title, image }) {
  return (
    <div className={s.catalog_card}>
      <img 
        className={s.image}
        src={`http://localhost:3333${image}`}
        alt={title}
      />
      <h3>{title}</h3>
    </div>
  );
}
