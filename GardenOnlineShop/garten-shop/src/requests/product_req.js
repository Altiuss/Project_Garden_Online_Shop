

import { loadProduct } from "../store/reducers/product";

export const load_product = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        const [productData] = json;
        const { name, price, description, image } = productData;
        dispatch(loadProduct({ name, price, description, image }));
      });
  };
};