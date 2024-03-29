import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Rootlayout from "./Layouts/Rootlayout";
import Movies from "./component/Movies";
import Tv from "./component/Tv";
import Notfound from "./component/Notfound";
import About from "./component/About";
import People from "./component/People";
import DetilesItem from "./component/DetilesItem";
import Authlayout from "./Layouts/Authlayout";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import ProtectedRoutes from "./component/ProtectedRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes  > <Rootlayout /> </ProtectedRoutes>,
      children: [
        { index: true, element: <Home/> },
        { path: "home", element: <Home/> },
        { path: "movies", element: <Movies /> },
        { path: "about", element: <About /> },
        { path: "people", element: <People /> },
        { path: "tv", element: <Tv /> },
        { path: "detiles/:id/:Mtype", element: <DetilesItem /> },
        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "/",
      element: <Authlayout />,
      children: [
        { index: true, element: <Signup /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer/>
      <RouterProvider router={routers} />
    </>
  );
}
