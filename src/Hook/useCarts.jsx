// useCarts.js

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: cart = {}, refetch, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  
  return [cart, refetch, isLoading];
};

export default useCart;
