import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../Component/Layout";
import { fetchCocktails } from "../Redux/Feature/Action";

const Homepage = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => state.cocktails);
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {cocktails.map((item) => (
            <div className="col-md-3">
              <div className="card h-25" key={item.id}>
                <img
                  src={item.strDrinkThumb}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.strCategory}</h5>
                  <h5 className="card-title">{item.strGlass}</h5>
                  <p className="card-text">{item.strInstructions}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
