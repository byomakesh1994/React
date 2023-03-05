import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { GetProducts } from "../../Redux/Action/Products/GetProduct";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import { Row, Col } from "antd";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products.products);
  const [search, setSearch] = useState("");

  const productLists = () => {
    let args = `?limit=0`;
    dispatch(GetProducts(args));
  };

  useEffect(() => {
    productLists();
  }, []);
  //debounce function
  // const debounce=(fn, delay) =>{
  //   let timer;
  //   return function() {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(this, arguments);
  //     }, 1000);
  //   };
  // }
  const searchInput = () => {
    let args = `search?q=${search}`;
    dispatch(GetProducts(args));
  };

  return (
    <Layout>
      <div style={{ margin: "auto", padding: "10px" }}>
        <InputBase
          style={{
            margin: "auto",
            border: "1px solid gray",
            borderRadius: "20px",
            padding: "10px",
            height: "30px",
          }}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          name="search"
          value={search.name}
          onChange={(e) => searchInput(setSearch(e.target.value))}
        />
      </div>
      <Row gutter={[10, 10]} space={10} className="gutter-row">
        {!products ? (
          <CircularProgress style={{ margin: "auto" }} />
        ) : (
          products?.map((product, i) => (
            <>
              <Col xs={12} sm={10} lg={6} className="gutter-row" gutter={10}>
                <Link to={`/products/${product.id}`}>
                  <Card
                    style={{
                      width: "300px",
                      height: "540px",
                      marginBottom: "20px",
                      marginLeft: "20px",
                      padding: "30px",
                    }}
                    key={product.id}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ bgcolor: red[500] }}
                          aria-label="recipe"
                          src={product.thumbnail}
                        />
                      }
                    />
                    <Typography
                      style={{ overflow: "hidden", marginBottom: "20px" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {product.title}
                    </Typography>

                    <CardMedia
                      style={{ width: "250px", height: "250px" }}
                      component="img"
                      height="194"
                      image={product.images[0]}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography
                        style={{ marginBottom: "5px" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {product.brand}
                      </Typography>
                      <Rating
                        style={{ marginBottom: "5px" }}
                        name="disabled"
                        value={product.rating}
                        readOnly
                      />
                      <Typography
                        style={{ marginBottom: "10px" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        ${product.price}.00
                      </Typography>
                      <Typography
                        style={{ overflow: "hidden" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Col>
            </>
          ))
        )}
      </Row>
    </Layout>
  );
};

export default Products;
//debounce function?
