import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { DatePicker, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Singleuser } from "../Redux/Action/Editaction";
import { UpdateUser } from "../Redux/Action/Updateaction";
import Spinner from "./Spinner";

const EditUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, loading } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    name: "",
    email: "",
    select: "",
    date: "",
    checkbox: [],
    radio: "",
    rate: "",
  });

  useEffect(() => {
    dispatch(Singleuser(id));
    setUser(list);
  }, []);

  const onUpdate = (e) => {
    e.preventDefault();
    dispatch(UpdateUser({ id, user }));
    navigate("/");
  };
  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const rateChange = (e) => {
    const { value } = e.target;
    setUser({ ...user, rate: value });
  };

  const onChange = (date, dateString) => {
    setUser({ ...user, date: dateString });
  };
  const checkboxChange = (e) => {
    const { value, checked } = e.target;
    const { checkbox } = user;
    if (checked) {
      setUser({ ...user, checkbox: [...checkbox, value] });
    } else {
      setUser({ ...user, checkbox: checkbox.filter((e) => e !== value) });
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row col-md-6 col-md-offset-3">
          <div className="panel border mt-3 ">
            <div className="panel-heading text-center mt-1">
              <h2>Registration Form</h2>
            </div>
            {loading && !user[0] ? (
              <Spinner />
            ) : (
              <div className="panel-body">
                <form onSubmit={(e) => onUpdate(e)}>
                  <div className="form-group col-md-4 mt-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      value={user.name}
                      onChange={(e) => handleInputchange(e)}
                    />
                  </div>
                  <div className="form-group col-md-4 mt-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="email"
                      value={user.email}
                      onChange={(e) => handleInputchange(e)}
                    />
                  </div>
                  <div className="form-group col-md-4 mt-3">
                    <label className="m-2">State</label>
                    <select
                      id="inputState"
                      className="form-control"
                      name="select"
                      onChange={(e) => handleInputchange(e)}
                    >
                      <option>Select State</option>
                      <option
                        selected={user.select === "Odisha"}
                        value="Odisha"
                      >
                        Odisha
                      </option>
                      <option selected={list.select === "Delhi"} value="Delhi">
                        Delhi
                      </option>
                      <option
                        selected={user.select === "Hydrabad"}
                        value="Hydrabad"
                      >
                        Hydrabad
                      </option>
                      <option
                        selected={user.select === "Mumbai"}
                        value="Mumbai"
                      >
                        Mumbai
                      </option>
                      <option
                        selected={user.select === "Chennai"}
                        value="Chennai"
                      >
                        Chennai
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-md-4 mt-3">
                    <div>
                      <label className=" m-2">Select Date</label>
                    </div>
                    <Space direction="vertical">
                      <DatePicker allowClear onChange={onChange} name="date" />
                    </Space>
                  </div>
                  <div className="form-group col-md-4 mt-2">
                    <Typography className="mt-3 mb-2 ">Courses</Typography>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                        name="checkbox"
                        value="HTML"
                        checked={user.checkbox.find((e) => e === "HTML")}
                        onChange={(e) => checkboxChange(e)}
                      />
                      <label className="form-check-label">HTML</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                        name="checkbox"
                        value="CSS"
                        checked={user.checkbox.find((e) => e === "CSS")}
                        onChange={(e) => checkboxChange(e)}
                      />
                      <label className="form-check-label">CSS</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                        name="checkbox"
                        value="JAVASCRIPT"
                        checked={user.checkbox.find((e) => e === "JAVASCRIPT")}
                        onChange={(e) => checkboxChange(e)}
                      />
                      <label className="form-check-label">JAVASCRIPT</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                        name="checkbox"
                        value="BOOTSTRAP"
                        checked={user.checkbox.find((e) => e === "BOOTSTRAP")}
                        onChange={(e) => checkboxChange(e)}
                      />
                      <label className="form-check-label">BOOTSTRAP</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <Typography className="col-form-label col-sm-2 mt-3">
                      Framework
                    </Typography>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          id="gridRadios1"
                          value="Reactjs"
                          checked={user.radio === "Reactjs"}
                          onChange={(e) => handleInputchange(e)}
                        />
                        <label className="form-check-label">REACT JS</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="radio"
                          id="gridRadios2"
                          value="Angular"
                          checked={user.radio === "Angular"}
                          onChange={(e) => handleInputchange(e)}
                        />
                        <label className="form-check-label">ANGULAR</label>
                      </div>
                    </div>
                  </div>
                  <Typography className="col-form-label col-sm-2 mt-3">
                    Controlled
                  </Typography>
                  <Rating
                    name="rate"
                    value={user.rate}
                    onChange={(e) => rateChange(e)}
                  />
                  <div className="panel-footer ">
                    <div className="mt-2 mb-2">
                      <button className="btn btn-primary">UPDATE</button>
                    </div>
                  </div>
                </form>
                <div>
                  <button
                    className="btn btn-warning mt-3 mb-3"
                    onClick={() => navigate("/")}
                  >
                    BACK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditUser;
