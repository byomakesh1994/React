import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchListuser } from "../Redux/Action/Listaction";
import { Link } from "react-router-dom";
import { Deleteuser } from "../Redux/Action/Deleteaction";
import { Button, Popconfirm } from "antd";
import Spinner from "./Spinner";

const Listuser = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const { list, loading } = useSelector((state) => state.users);
  const [active, setActive] = useState(null);

  useEffect(() => {
    dispatch(fetchListuser());
  }, []);

  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });

  const deleteData = (id) => {
    if (window.confirm("Are you sure to delete")) {
      dispatch(Deleteuser(id));
    }
    dispatch(fetchListuser());
  };

  // if (list) {
  //   let date_string = list.map((val) => val.date);
  //   let date_val = date_string.map((val) => new Date(val.substr(0, 16)));

  //   console.log(date_val);
  // }
  // for (var i = 0; i < mrm_recommendations.length; i++) {
  //   mrm_recommendations[i].mrm_recommendation_targetdate = formatted_date[i];
  // }

  // const searchItems = list.filter((item) => {
  // if (searchInput === "") {
  //   return item;
  // } else if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
  //   return item;
  // }
  // });

  // const searchItems = list.filter((item) =>
  //   item.radio.toLowerCase().includes(searchInput.toLowerCase())
  // );
  const searchItems = list.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const toggleActive = (i) => {
    if (i === active) {
      setActive(null);
    } else {
      setActive(i);
    }
  };

  return (
    <Layout>
      <div className="table-responsive">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Search here"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <select
          id="inputState"
          className="form-control"
          name="select"
          // onChange={(e) => setSearchInput(e.target.value)}
        >
          <option value="">select Framework</option>
          <option value="ReactJs">ReactJs</option>
          <option value="Angular">Angular</option>
        </select>
        <h3>List of users</h3>
        {loading ? (
          <Spinner />
        ) : (
          <table className="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Sl</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Framework</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {searchItems.map((us, index) => (
                <tr
                  key={us.id}
                  style={
                    active === us.id
                      ? { background: "rgb(59, 122, 235)" }
                      : { background: "rgb(215, 225, 235)" }
                  }
                  onClick={() => toggleActive(us.id)}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{us.name}</td>
                  <td>{us.email}</td>
                  <td>{us.radio}</td>
                  <td
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Link to={`/view`}>
                      <button type="button" className="btn btn-primary">
                        View
                      </button>
                    </Link>
                    <Link to={`/edit/${us.id}`}>
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <Popconfirm
                        title="Title"
                        description="Open Popconfirm with Promise"
                        onConfirm={confirm}
                      >
                        <Button
                          type="button"
                          className="btn btn-danger mb-2"
                          onClick={(e) => deleteData(us.id)}
                        >
                          Delete
                        </Button>
                      </Popconfirm>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default Listuser;
