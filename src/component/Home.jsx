import React, { Component } from "react";
import Itemm from "./Itemm";
import {getTrending} from "../Api/Api";
import Loading from "./loading";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      tv: [],
      people: [],
    };
  }
  getDataMovies = async () => {
    let allMovies = await getTrending("movie");
    let allTv = await getTrending("tv");
    let allPeople = await getTrending("person");
    this.setState({ movies: allMovies });
    this.setState({ tv: allTv });
    this.setState({ people: allPeople });
  };
  componentDidMount() {
    this.getDataMovies();
  }

  render() {
    return (
      <>
        {this.state.movies.length > 0 &&
        this.state.tv.length > 0 &&
        this.state.people.length > 0 ? (
          <>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="item">
                    <div className="brdr w-25"></div>
                    <h1>
                      Trending <br /> Movies <br /> to watch Now
                    </h1>
                    <p className="secondFontColor">
                      Most watched Movies by days
                    </p>
                    <div className="brdr w-100 "></div>
                  </div>
                </div>
                {this.state.movies.map((value, index) => (
                  <Itemm key={index} data={value} />
                ))}
              </div>
            </div>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="item">
                    <div className="brdr w-25"></div>
                    <h1>
                      Trending <br /> Tv <br /> to watch Now
                    </h1>
                    <p className="secondFontColor">Most watched Tv by days</p>
                    <div className="brdr w-100 "></div>
                  </div>
                </div>
                {this.state.tv.map((value, index) => (
                  <Itemm key={index} data={value} />
                ))}
              </div>
            </div>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="item">
                    <div className="brdr w-25"></div>
                    <h1>
                      Trending <br /> people <br /> to watch Now
                    </h1>
                    <p className="secondFontColor">
                      Most watched people by days
                    </p>
                    <div className="brdr w-100 "></div>
                  </div>
                </div>
                {this.state.people.map((value, index) => (
                  <div key={index} className="col-md-2 my-3">
                    <div>
                      <div className="item overflow-hidden">
                        <img
                          className="w-100"
                          src={
                            value.profile_path != null
                              ? "https://image.tmdb.org/t/p/w500" +
                                value.profile_path
                              : "https://cdn.shopify.com/s/files/1/2076/3791/products/3151RuMAE0L._SL1000_grande.jpg?v=1589581656"
                          }
                          alt=""
                        ></img>
                        <div className="overlay">
                          <p>{value.original_name}</p>
                        </div>
                      </div>
                      <div>
                        <h5 style={{ fontStyle: "italic" }} className="my-3">
                          {value.name}
                        </h5>
                      </div>
                    </div>
                  </div>
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
}
