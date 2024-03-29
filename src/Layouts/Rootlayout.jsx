import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import { Offline } from "react-detect-offline";
import NoEnterNet from "../component/NoEnterNet";
import Footer from "../component/Footer";


export default function Rootlayout() {
  return (
    <>
      <Navbar />
      <Offline> <NoEnterNet /> </Offline>
      <Outlet />
      <Footer />
    </>
  );
}
