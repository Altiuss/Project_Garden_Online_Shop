import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../../components/ProductCard";
import { load_products } from "../../../../requests/products_req";
import s from "./index.module.css";

export default function Block4() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(load_products);
  }, []);
  console.log(products);




  return <section className={s.section_four}>
    <div className={s.container_section_four}>
      <div className={s.section_four__title}>
      <h1>Sale</h1> </div>
      <div className={s.section_four__content}>
        {
          products
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  </section>;
}
