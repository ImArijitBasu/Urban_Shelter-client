import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://urbanshelter.vercel.app/",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout, setLoading } = useAuth();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosSecure.interceptors.response.use(
    (response) => response, 
    async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        await logout();
        setLoading(false);
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
