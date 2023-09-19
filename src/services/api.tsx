import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.weatherapi.com/v1/current.json?q=",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  params: { key: "074f17de8d604157b9631928231909" },
});

export default instance;
