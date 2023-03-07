import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { GetUserAction } from "../../Redux/Action/Users/GetUserAction";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import moment from "moment/moment";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const UsersList = () => {
    let args = `?limit=${count}`;
    dispatch(GetUserAction(args));
  };

  useEffect(() => {
    UsersList();
  }, []);

  return (
    <Layout>
      <h1>List of User</h1>
      {!users ? (
        <CircularProgress style={{ margin: "auto" }} />
      ) : (
        <Paper sx={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Si</TableCell>
                  <TableCell align="right">Photo</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">DOB</TableCell>
                  <TableCell align="right">Adress</TableCell>
                  <TableCell align="right">University</TableCell>
                  <TableCell align="right">Orders</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.users?.map((user, index) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">
                      <Avatar alt={user.firstName} src={user.image} />
                    </TableCell>
                    <TableCell align="right">{`${user.firstName} ${user.maidenName} ${user.lastName}`}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.gender}</TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                    <TableCell align="right">
                      {moment(user.birthDate).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      <List>
                        <ListItem disablePadding>
                          <ListItemText>
                            At/Po : {user.address.address}
                          </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemText>
                            City : {user.address.city}
                          </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemText>
                            Postal Code : {user.address.postalCode}
                          </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemText>
                            State : {user.address.state}
                          </ListItemText>
                        </ListItem>
                      </List>
                    </TableCell>
                    <TableCell align="right">{user.university}</TableCell>
                    <TableCell align="right">
                      <Link to={`/carts/user/${user.id}`}>
                        <div
                          style={{
                            border: "2px solid",
                            borderRadius: "25px",
                            marginTop: "-45px",
                            padding: "5px",
                          }}
                        >
                          <Badge color="success">
                            <ShoppingCartIcon />
                          </Badge>
                        </div>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Layout>
  );
};

export default User;
