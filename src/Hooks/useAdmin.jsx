import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading, error } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      if (!user || !user.email) return false; 
      try {
        const res = await axiosSecure.get(`/users/role/${user.email}`);
        if (res.status === 404) {
          return false;  
        }
        return res.data.role === "admin";  
      } catch (err) {
        console.error("Error checking admin role:", err);
        return false;
      }
    },
  });

  return [isAdmin, isAdminLoading, error];
};

export default useAdmin;
