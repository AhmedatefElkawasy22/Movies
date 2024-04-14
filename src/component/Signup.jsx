import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiospost } from "../Api/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  let [load, setload] = useState(true);
  let nav = useNavigate();
  let [fromData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    userName: "",
    address: "",
    email: "",
    password: "",
    role: "Customer",
  });

  function getFormData(e) {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  }

  async function sendDateform(e) {
    try {
      setload(false);
      e.preventDefault();

      let MSGres = await axiospost(fromData, "Register");
      nav("/signin");
      console.log(MSGres);
    } catch (error) {
      setload(true);
      if (error.message === "Request failed with status code 500") {
        toast.error("an error occurred , try again 😊", {
          position: "top-right",
        });
      } else {
        toast.error(error.response.data, {
          position: "top-right",
        });
      }
      //console.error("Error:", error);
    }
  }

  return (
    <>
      <h1>Register Now</h1>
      <form action="" className="myform" onSubmit={sendDateform}>
        <label htmlFor="firstName">First Name :</label>
        <input
          onChange={getFormData}
          type="text"
          className="form-control my-3"
          name="firstName"
          id="firstName"
        />
        <label htmlFor="lastName">Last Name :</label>
        <input
          onChange={getFormData}
          type="text"
          className="form-control my-3"
          name="lastName"
          id="lastName"
        />
        <label htmlFor="address">Address :</label>
        <input
          onChange={getFormData}
          type="text"
          className="form-control my-3"
          name="address"
          id="address"
        />
        <label htmlFor="phone">Phone :</label>
        <input
          onChange={getFormData}
          type="text"
          className="form-control my-3"
          name="phone"
          id="phone"
        />
        <label htmlFor="userName">UserName :</label>
        <input
          onChange={getFormData}
          type="text"
          className="form-control my-3"
          name="userName"
          id="userName"
        />
        <label htmlFor="email">Email :</label>
        <input
          onChange={getFormData}
          type="email"
          className="form-control my-3"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password :</label>
        <input
          onChange={getFormData}
          type="password"
          className="form-control my-3"
          name="password"
          id="password"
        />
        <button
          type="submit"
          className="btn btn-primary float-end btnSing"
          هىلف
        >
          {load ? "SignUp" : <i className="fa fa-spinner fa-spin"></i>}
        </button>
      </form>
    </>
  );
}
