import axios from "axios";


const api=axios.create({
      baseURL:"https://www.omdbapi.com",
});

export const Movies=()=>{
      return api.get("/?i=tt3896198&apikey=e00c85c8&s=marvels&page=1");
};