import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "./../../requests/categories_products_req";
import { useParams } from "react-router-dom";
import ProductCard from "./../../components/ProductCard";
import s from "./index.module.css";

export default function ProductsPage({ title}) {
  const dispatch = useDispatch();

  const { id } = useParams();
  const products = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(load_category_products(id));
  }, [dispatch,id]);
  console.log(title);

  return (
    <section className={s.products_section}>
      <h1>Hallo</h1>
      <div>
       <p>Price</p>
       <form >
          <input type='number' name="min" placeholder="from" />
          <input type='number' name="max" placeholder="to" />
       </form>
       <p>Discounted items</p>
       <span>Discounted items</span>

      </div>


      <div className={s.products_container}>
        {products.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
