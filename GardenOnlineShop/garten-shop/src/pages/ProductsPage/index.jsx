import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "./../../requests/categories_products_req";
import { useParams } from "react-router-dom";
import ProductCard from "./../../components/ProductCard";
import { sortProducts } from "../../store/reducers/products_from_category";
import { searchByPrice } from "../../store/reducers/products_from_category";
import s from "./index.module.css";

export default function ProductsPage({ title }) {
  const dispatch = useDispatch();

  const { id } = useParams();
  const products = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(load_category_products(id));
  }, [dispatch, id]);

  const sort_products = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  const search = (e) => {
    e.preventDefault();
    const min = e.target.min.value || 0;
    const max = e.target.max.value || Infinity;
    dispatch(searchByPrice({ min, max }));
    console.log(min, max);
  };


  


  return (
    <section className={s.products_section}>
      <h1>Hallo{title}</h1>
      <div className={s.search_panel}>
        <div className={s.search_container}>
          <form className={s.search_form} onSubmit={search}>
            <span>Price</span>
            <input type="number" name="min" placeholder="from" />
            <input type="number" name="max" placeholder="to" />
            <button>Search</button>
          </form>
        </div>

        <div className={s.discounted_items_container}>
          <p>Discounted items</p>
          <div className={s.discounted_items}>5</div>
        </div>

        <div className={s.select_container}>
          <span>Sorted</span>
          <select onInput={sort_products} className={s.select}>
            <option value="default"> by default</option>
            <option value="price"> by price</option>
            <option value="title">by name</option>

          </select>
        </div>
      </div>

      <div className={s.products_container}>
        {products
        .filter((el) => !el.hide)
        .map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
