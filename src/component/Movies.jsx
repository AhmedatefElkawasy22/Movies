import React, { useEffect, useState } from "react";
import Itemm from "./Itemm";
import { getTrending } from "../Api/Api";
import Loading from "./loading";

export default function Movies() {
  let [movies, setmovies] = useState([]);
  async function getdata() {
    let movies = await getTrending("movie");
    setmovies(movies);
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      {movies.length > 0 ? (
        <>
          <div className="container my-5">
            <div className="row">
              {movies.map((value, index) => (
                <Itemm key={index} data={value} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
