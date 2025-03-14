import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase function
  //baseURL: "http://127.0.0.1:5001/clone-706f4/us-central1/api",
  // deployed version of firebase function
  //baseURL: "http://api-cppbndveia-uc.a.run.app",
  // deployed version of amazon server on render.com
baseURL: "https://amazon-api-deploy-rkw7.onrender.com/",
});




export  {axiosInstance}