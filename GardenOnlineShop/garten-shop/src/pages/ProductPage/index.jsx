import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "./../../requests/product_req";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/reducers/cart";

import { Link } from "react-router-dom";
import s from "./index.module.css";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(load_product(id));
  }, [dispatch,id]);

  const { name, price, description, image, discont_price, title } = product;

  const add_to_cart = () =>
    dispatch(addToCart({ id: +id, image, price, name, description, discont_price ,title}));

  console.log(product);
  return (
    <section className={s.product_page}>
      <h2>Name: {title}</h2>
      <img
        className={s.product_image}
        src={`http://localhost:3333${image}`}
        alt="foto"
      />
      <p>Price: {price}</p>
      <Link to="/cart">
        <button onClick={add_to_cart}>To cart</button>
      </Link>
      <p>Description {description}</p>
    </section>
  );
}
