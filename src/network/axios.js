import axios from 'axios';

let headers = {
    "Content-Type":"application/json",
    //"Access-Control-Allow-Origin": "*",
}

let url = (window.env && window.env.VUE_APP_API_URL) ? window.env.VUE_APP_API_URL : process.env.VUE_APP_API_URL;
console.log(url);
export const Axios = axios.create({
  baseURL: url,
  headers: headers
});