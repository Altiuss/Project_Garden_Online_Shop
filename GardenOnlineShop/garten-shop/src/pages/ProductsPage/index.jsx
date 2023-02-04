import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "./../../requests/categories_products_req";
import { useParams } from "react-router-dom";
import ProductCard from "./../../components/ProductCard";
import s from "./index.module.css";

export default function ProductsPage() {
  const dispatch = useDispatch();
  
  const { id} = useParams();
  const products = useSelector((state) => state.categoryProducts);
 

  useEffect(() => {
    dispatch(load_category_products(id));
  }, [dispatch]);





  return (
    <section className={s.products_section}>
      <h1>{}</h1>
      <div className={s.products_container}>
        {products.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
