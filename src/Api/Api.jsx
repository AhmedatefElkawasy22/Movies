import axios from "axios";


export let getTrending = async (value)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${value}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
  return data.results;
}
export let getDetails = async (id,Mtype) =>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/${Mtype}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`);
    return data;
}

// export let axiospost = async (dataform , Mtype) =>{
//   let { data } = await axios.post(`http://ahmedelkawasy-001-site1.ltempurl.com/api/Account/${Mtype}`, dataform);
//   return data;
// }



export let axiospost = async (dataform, Mtype) => {
  // Define your basic authentication credentials
  const username = '11171293';
  const password = '60-dayfreetrial';
  
  // Encode credentials as base64
  const credentials = btoa(`${username}:${password}`);
  
  try {
    let { data } = await axios.post(
      `http://ahmedelkawasy-001-site1.ltempurl.com/api/Account/${Mtype}`,
      dataform,
      {
        headers: {
          // Set Authorization header with basic authentication credentials
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json' // Assuming your data is JSON
        }
      }
    );
    return data;
  } catch (error) {
    // Handle error
    // toast.error("an error occurred , try again 😊", {
    //   position: "top-right",
    // });
    console.error('Error:', error);
    throw error;
  }
}
