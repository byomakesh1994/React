import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { GetUserAction } from "../../Redux/Action/Users/GetUserAction";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const UsersList = () => {
    let args = `?limit=${count}`;
    dispatch(GetUserAction(args));
  };
  console.log(users);
  useEffect(() => {
    UsersList();
  }, []);

  return (
    <Layout>
      <h1>List of User</h1>{" "}
      {!users ? (
        <CircularProgress style={{ margin: "auto" }} />
      ) : (
        <table className="table table-responsive bordered">
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
              <th scope="col">Adress</th>
              <th scope="col">University</th>
            </tr>
          </thead>
          <tbody>
            {users?.users?.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <th>
                  <Avatar alt={user.firstName} src={user.image} />
                </th>
                <td>{`${user.firstName} ${user.maidenName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  <ul>
                    <li>At/Po : {user.address.address}</li>
                    <li>City : {user.address.city}</li>{" "}
                    <li>PostalCode : {user.address.postalCode}</li>{" "}
                    <li>State : {user.address.state}</li>
                  </ul>
                </td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default User;
