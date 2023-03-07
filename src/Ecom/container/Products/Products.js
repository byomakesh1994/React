import React, { useEffect, useState } from "react";
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
import Pagination from "@mui/material/Pagination";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products.products);

  // const product = useSelector((state) => state.products);
  // console.log(product);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);

  const productLists = () => {
    let args = `?limit=${count}`;
    dispatch(GetProducts(args));
  };
  // const categoryLists = () => {
  //   let args = `categories`;
  //   dispatch(GetProducts(args));
  // };
  useEffect(() => {
    productLists();
    //  categoryLists();
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

  const handleChange = (e, value) => {
    setPage(value);
    console.log(e);
    let limit = page * count;
    let skip = limit - count;
    let args = `?limit=${limit}&skip=${skip}`;
    // dispatch(GetProducts(args));
    console.log(page);
    console.log(skip, limit);
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

      {/* <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            {product?.loading ? (
              <CircularProgress style={{ margin: "auto" }} />
            ) : (
              product?.products?.map((el, i) => (
                <MenuItem value={el} key={i}>
                  {el}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Box> */}
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
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={(e) => handleChange(e)} />
    </Layout>
  );
};

export default Products;
