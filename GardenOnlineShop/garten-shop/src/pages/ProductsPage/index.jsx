import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "./../../requests/categories_products_req";
import { useParams } from "react-router-dom";
import ProductCard from "./../../components/ProductCard";
import { sortProducts } from "../../store/reducers/products_from_category";
import { searchByPrice } from "../../store/reducers/products_from_category";
import s from "./index.module.css";

export default function ProductsPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.categoryProducts);
  const [showOnlyDiscounted, setShowOnlyDiscounted] = useState(false);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  const discountedItems = showOnlyDiscounted
    ? products.filter(
        (el) => Math.round(((el.price - el.discont_price) / el.price) * 100) > 0
      )
    : products;

  const handleCheckboxChange = (event) => {
    setShowOnlyDiscounted(event.target.checked);
  };

  useEffect(() => {
    dispatch(load_category_products(id));
  }, [id, dispatch]);

  const sort_products = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  const search = (e) => {
    e.preventDefault();
    dispatch(searchByPrice({ min, max }));
  };

  const handleMinChange = (e) => {
    setMin(e.target.value);
    dispatch(searchByPrice({ min: e.target.value, max }));
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
    dispatch(searchByPrice({ min, max: e.target.value }));
  };
  
  const element = categories.find((el) => el.id === +id);
  console.log(element.title);


  return (
    <section className={s.products_section}>
      <h1> {element.title} </h1>
      <div className={s.search_panel}>
        <div className={s.search_container}>
          <form className={s.search_form} onSubmit={search}>
            <span>Price</span>
            <input
              type="number"
              name="min"
              placeholder="from"
              onInput={handleMinChange}
            />
            <input
              type="number"
              name="max"
              placeholder="to"
              onInput={handleMaxChange}
            />
          </form>
        </div>
        <div className={s.discounted_items_container}>
          <p>Discounted items</p>
          <input
            type="checkbox"
            checked={showOnlyDiscounted}
            onChange={handleCheckboxChange}
          />
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
        {discountedItems
          .filter((el) => !el.hide)
          .map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
      </div>
    </section>
  );
}
