import React, { useEffect, useState } from 'react'
import Itemm from './Itemm';
import {getTrending} from '../Api/Api';
import Loading from './loading';

export default function Tv() {
    let [tv, settv] = useState([]);
    async function getdata() {
        let tv = await getTrending("tv");
        settv(tv);
    }
    useEffect(() => {
      getdata();
    },[]);
  return (
    <>
     {tv.length > 0 ? (
        <>
          <div className="container my-5">
            <div className="row">
              {tv.map((value, index) => (
                <Itemm key={index} data={value} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
