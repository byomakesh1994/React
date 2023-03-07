import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              HomePage
            </Link>
            <Link underline="hover" color="inherit" to="/products">
              Products
            </Link>
            <Link underline="hover" color="text.primary" to="/orders">
              Orders
            </Link>
            <Link underline="hover" color="text.primary" to="/user">
              User
            </Link>
          </Breadcrumbs>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
