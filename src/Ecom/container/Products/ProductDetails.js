import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../../Redux/Action/Products/ProductDetails";
import Skeleton from "@mui/material/Skeleton";
import Layout from "../../components/Layout";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const { product, loading } = products;
  const singleProduct = () => {
    let args = id;
    dispatch(SingleProduct(args));
  };

  useEffect(() => {
    singleProduct();
  }, []);

  return (
    <Layout>
      <Typography variant="body2" color="text.secondary">
        Product Details
      </Typography>
      {loading ? (
        <Skeleton
          style={{
            width: "300px",
            height: "540px",
            margin: "auto",
            marginTop: "100px",
          }}
          variant="rectangular"
          width={300}
          height={540}
        />
      ) : (
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            width: "300px",
            height: "540px",
            margin: "auto",
            marginTop: "100px",
            padding: "20px",
          }}
        >
          <Typography
            style={{
              overflow: "hidden",
              marginBottom: "10px",
              textAlign: "center",
            }}
            variant="h5"
            color="text.secondary"
          >
            {product.title}
          </Typography>
          <CardMedia
            style={{
              width: "250px",
              height: "250px",
              margin: "auto",
            }}
            image={product.images[0]}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.brand}
            </Typography>
            <Rating name="disabled" value={product.rating} readOnly />
            <Typography
              style={{ marginTop: "5px" }}
              variant="body2"
              color="text.secondary"
            >
              ${product.price}.00
            </Typography>
            <Typography
              style={{ overflow: "hidden", marginTop: "20px" }}
              variant="body2"
              color="text.secondary"
            >
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
};
export default ProductDetails;
