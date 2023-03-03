import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    website: "",
    phone: "",
  });
  const { name, email, username, website, phone } = user;
  const handleInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    navigate("/");
  };
  return (
    <div className="container">
      <form className="container row g-2" onSubmit={(e) => onSubmit(e)}>
        <div className="col-md-4">
          <label for="inputEmail4" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="name"
            value={name}
            onChange={(e) => handleInputchange(e)}
          />
        </div>
        <div className="col-md-4">
          <label for="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="email"
            value={email}
            onChange={(e) => handleInputchange(e)}
          />
        </div>
        <div className="col-8">
          <label for="inputAddress" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="username"
            value={username}
            onChange={(e) => handleInputchange(e)}
          />
        </div>
        <div className="col-8">
          <label for="inputAddress2" className="form-label">
            Website
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="website"
            value={website}
            onChange={(e) => handleInputchange(e)}
          />
        </div>
        <div className="col-md-8">
          <label for="inputCity">Phone No.</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="phone"
            value={phone}
            onChange={(e) => handleInputchange(e)}
          />
        </div>
        <div>
          <button className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  );
};
export default Add;
