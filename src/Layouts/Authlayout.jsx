import React from 'react'
import Navbar from "../component/Navbar"
import { Outlet } from 'react-router-dom'


export default function Authlayout() {
  return (
    <>
      
      <Navbar user={true} />
      <div className="w-50 m-auto my-5">
          <Outlet/>
      </div>
    </>
  )
}
