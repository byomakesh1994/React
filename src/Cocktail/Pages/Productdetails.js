import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Component/Layout";
import { fetchCocktails } from "../Redux/Feature/Action";

const Productdetails = () => {
  const { id } = useParams();
  const { loading, cocktail } = useSelector((state) => ({
    ...state.cocktail,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails(id));
  }, [dispatch, id]);

  return <Layout>{JSON.stringify(cocktail)}</Layout>;
};

export default Productdetails;
