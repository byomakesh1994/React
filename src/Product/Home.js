import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setData(result.data);
  };

  const deleteData = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">First</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Username</th>
              <th scope="col">Website</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!data
              ? "loading..............."
              : data.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.website}</td>
                    <td
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link to={`/view`}>
                        <button type="button" class="btn btn-primary">
                          View
                        </button>
                      </Link>
                      <Link to={`/edit/${user.id}`}>
                        <button type="button" class="btn btn-primary">
                          Edit
                        </button>
                      </Link>
                      <Link>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={(e) => deleteData(user.id)}
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
