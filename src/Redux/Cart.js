import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./reducer/Cartslice";

const Cart = () => {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(remove(item));
  };
  return (
    <div>
      <h1 className="container">Product</h1>
      <div className="container">
        {product.map((item) => (
          <div
            className="card"
            key={item.id}
            style={{ display: "flex", marginTop: "20px" }}
          >
            <img src={item.image} className="card-img-top img" alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <div>Price : ${item.price}</div>
              <button
                onClick={() => removeItem(item.id)}
                className="btn btn-primary"
              >
                Remove item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
