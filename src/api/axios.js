import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "6ba039b56cc0348dab67a929bc09d23c",
    language: "ko-KR",
  },
});

export default instance;