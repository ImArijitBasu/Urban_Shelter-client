import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMember = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isMember,
    isLoading: isMemberLoading,
    error,
  } = useQuery({
    queryKey: [user?.email, "isMember"],
    queryFn: async () => {
      if (!user || !user.email) return false;
      try {
        const res = await axiosSecure.get(`/users/role/${user.email}`);
        if (res.status === 404) {
          return false;
        }
        return res.data.role === "member";
      } catch (err) {
        console.error("Error checking member role:", err);
        return false;
      }
    },
  });

  return [isMember, isMemberLoading, error];
};

export default useMember;
