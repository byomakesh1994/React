import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetCartsAction } from "../../Redux/Action/Carts/CartsAction";
import Layout from "../../components/Layout";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Carts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.carts.carts);
  const [badge, setBadge] = useState(5);
  const productLists = () => {
    let args = `user/${id}`;
    dispatch(GetCartsAction(args));
  };
  console.log(data.carts[0].products);
  useEffect(() => {
    productLists();
  }, []);

  return (
    <Layout>
      <div
        style={{
          border: "2px solid",
          borderRadius: "25px",
          marginTop: "-45px",
          padding: "5px",
        }}
      >
        <Badge badgeContent={5} color="success">
          <ShoppingCartIcon />
        </Badge>
      </div>
      <div>
        {!data ? (
          <CircularProgress style={{ margin: "auto" }} />
        ) : (
          data?.carts[0]?.products?.map((cart, i) => (
            <Card sx={{ maxWidth: 345 }} key={cart.id}>
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Item : {cart.title}
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  Price : {cart.price}
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Price : {cart.discountedPrice}
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Qty : {cart.quantity}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Carts;
