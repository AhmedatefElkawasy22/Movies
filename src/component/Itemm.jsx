import React from "react";
import { Link } from "react-router-dom";

export default function Itemm(props) {
  let { name, poster_path, vote_average, overview, title , id , media_type } = props.data;
  return (
    <div className="col-md-2 my-3">
      <div>
        <div className="item overflow-hidden">
          <img
            className="w-100"
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
            alt=""
          ></img>
          <Link to={`/detiles/${id}/${media_type}`}>
            <div className="overlay">
              <p>{overview.split(" ").slice(0, 15).join(" ")}....</p>
            </div>
          </Link>
          <span className="voit">{parseFloat(vote_average.toFixed(1))}</span>
        </div>
        <div>
          <h5 style={{ fontStyle: "italic" }} className="my-3">
            {name}
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
}
