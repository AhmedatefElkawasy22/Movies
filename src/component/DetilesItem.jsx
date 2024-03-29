import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../Api/Api";
import Loading from "./loading";

export default function DetilesItem() {
  let [detiles, setdetiles] = useState("");
  let x = useParams();
  async function getdata() {
    let data = await getDetails(x.id, x.Mtype);
    setdetiles(data);
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      {detiles ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="w-100"
                  src={`https://image.tmdb.org/t/p/w500${detiles.poster_path}`}
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <div className="datadetiles">
                  <h2>
                    {detiles.name}
                    {detiles.title}
                  </h2>
                  <p className="secondFontColor">{detiles.tagline}</p>
                  {detiles.genres.map((value, index) => (
                    <span className="badge bg-info p-2 mx-2" key={index}>
                      {value.name}
                    </span>
                  ))}
                  <ul>
                    <li>vote : {detiles.vote_average}</li>
                    <li>vote count : {detiles.vote_count}</li>
                    <li>popularity : {detiles.popularity}</li>
                    <li>
                      release date : {detiles.first_air_date}
                      {detiles.release_date}
                    </li>
                  </ul>
                  <p className="secondFontColor">{detiles.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
