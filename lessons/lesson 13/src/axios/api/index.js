 import axios from "axios";

 const api = axios.create({
  baseURL:"https://692eaf5d91e00bafccd4d6a2.mockapi.io/api/v1",
 });

 const token = localStorage.getItem("token");

 api.interceptors.request.use((config)=>{
  config.headers.Authorization = "Bearer " +  token
 });

 export default api;