import axios from "axios";


export let getTrending = async (value)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${value}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
  return data.results;
}
export let getDetails = async (id,Mtype) =>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/${Mtype}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`);
    return data;
}

export let axiospost = async (dataform , Mtype) =>{
  let {data} = await axios.post(`https://localhost:7253/api/Account/${Mtype}`,dataform);
  return data;
}
