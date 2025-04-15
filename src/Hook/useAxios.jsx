import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://quick-shop-server.vercel.app",
});


const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
