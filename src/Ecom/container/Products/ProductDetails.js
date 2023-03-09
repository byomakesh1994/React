import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import { SingleProduct } from "../../Redux/Action/Products/ProductDetails";
import Skeleton from "@mui/material/Skeleton";
import Layout from "../../components/Layout";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProduct } from "../../Redux/Action/Products/DeleteProduct";
import { GetProducts } from "../../Redux/Action/Products/GetProduct";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const { product, loading } = products;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const singleProduct = () => {
    let args = id;
    dispatch(SingleProduct(args));
  };

  useEffect(() => {
    singleProduct();
  }, []);

  const deleteHandler = (id) => {
    dispatch(DeleteProduct(id));
    navigate("/products");
    let args = "";
    dispatch(GetProducts(args));
  };

  const editHandler = () => {
    console.log("hello");
    //setOpen(false);
  };

  const cancelHandler = () => {
    setOpen(false);
  };
  const handleBack = () => {
    navigate("/products");
  };

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
        <>
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
            <CardActions>
              <Button variant="contained" size="small" onClick={handleOpen}>
                View
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                size="small"
                onClick={() => deleteHandler(product.id)}
              >
                Delete
              </Button>
              <Button
                color="warning"
                ariant="contained"
                size="small"
                onClick={handleBack}
              >
                Back
              </Button>
            </CardActions>
          </Card>
        </>
      )}

      <Dialog open={open}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={() => editHandler()}>
            Update
          </Button>
          <Button autoFocus onClick={() => cancelHandler()}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};
export default ProductDetails;
