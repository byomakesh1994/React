import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewCountry = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});
  console.log(id);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`https://restcountries.com/v3.1/all/${id}`);
    setUser(result.data);
    console.log(result.data);
  };

  return <div>{JSON.stringify(user)}</div>;
};

export default ViewCountry;
