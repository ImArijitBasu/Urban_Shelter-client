import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://urbanshelter.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
