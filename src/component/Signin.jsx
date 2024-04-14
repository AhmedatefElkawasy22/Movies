import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiospost } from "../Api/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Signin() {
  let [load, setload] = useState(true);
  let nav = useNavigate();
  let [fromData, setFormData] = useState({
    email: "",
    password: "",
  });

  function getFormData(e) {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  }

  async function sendDateform(e) {
   
    try {
      setload(false);
      e.preventDefault();

      let MSGres = await axiospost(fromData, "Login");

      if (MSGres.token) {
        nav("/home");
        localStorage.setItem("token", MSGres.token);
        toast.success("Welcome 🥰");
      }
    } catch (error) {
      setload(true);
      if (error.message === "Request failed with status code 401") {
        toast.error(error.response.data , {
          position: "top-right",
        });
      } else {
        toast.error("an error occurred , try again 😊", {
          position: "top-right",
        });
      }
      console.error("Error:", error);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form action="" className="myform" onSubmit={sendDateform}>
        <label htmlFor="email">email :</label>
        <input
          onChange={getFormData}
          type="email"
          className="form-control my-3"
          name="email"
          id="email"
        />
        <label htmlFor="password">password :</label>
        <input
          onChange={getFormData}
          type="password"
          className="form-control my-3"
          name="password"
          id="password"
        />
        <p style={{ display: "inline", color: "#949cb0" }}>
          Don't have account ?{" "}
          <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
            Register
          </Link>{" "}
        </p>
        <button type="submit" className="btn btn-primary float-end btnSing">
          {load ? "SignIn" : <i className="fa fa-spinner fa-spin"></i>}
        </button>
      </form>
    </>
  );
}
