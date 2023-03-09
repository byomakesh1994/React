import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetCartsAction } from "../../Redux/Action/Carts/CartsAction";
import Layout from "../../components/Layout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, CardActions } from "@mui/material";

const Carts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, loading } = useSelector((state) => state.carts);

  const productLists = () => {
    let args = `user/${id}`;
    dispatch(GetCartsAction(args));
  };

  useEffect(() => {
    productLists();
  }, []);

  const handleBack = () => {
    navigate("/user");
  };
  return (
    <Layout>
      <div
        style={{
          borderRadius: "25px",
          marginLeft: "150px",
          padding: "5px",
        }}
      >
        {loading ? (
          <CircularProgress style={{ margin: "auto" }} />
        ) : (
          carts?.carts?.[0]?.products?.map((cart, i) => (
            <Card sx={{ maxWidth: 345 }} key={cart.id}>
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Item : {cart.title}
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  Price : $ {cart.price}.00
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Price : $ {cart.discountedPrice}.00
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  Qty : {cart.quantity}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
        <Divider sx={{ maxWidth: 345 }} />
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              padding: "10px",
            }}
          >
            <Typography gutterBottom variant="h8" component="div">
              Total : $ {carts?.carts?.[0]?.total} .00
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              Total Qty : {carts?.carts?.[0]?.totalQuantity}
            </Typography>
            <CardActions>
              <Button
                color="error"
                ariant="contained"
                size="small"
                onClick={() => handleBack()}
              >
                Back
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Carts;
