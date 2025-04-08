import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5080",
});


const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
