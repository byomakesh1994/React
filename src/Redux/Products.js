//import axios from "axios";
import React, { useEffect, useState } from "react";
import { add } from "./reducer/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./reducer/Action";
import { STATUS } from "./reducer/ProductReducer";

function Products() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  // const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(fetchProduct());
    //loadProduct();
  }, []);

  // const loadProduct = async () => {
  //   const result = await axios.get("https://fakestoreapi.com/products");
  //   setData(result.data);
  // };
  const addProduct = (product) => {
    dispatch(add(product));
  };
  if (status === STATUS.LOADING) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container">
      {data.map((product) => (
        <div
          className="card"
          key={product.id}
          style={{ display: "flex", marginTop: "20px" }}
        >
          <img src={product.image} className="card-img-top img" alt="" />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <div>Price : ${product.price}</div>
            <button
              onClick={() => addProduct(product)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
