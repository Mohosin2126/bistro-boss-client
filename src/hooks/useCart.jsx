import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const useCart = () => {
const axiosSecure=UseAxiosSecure()
const {user}=UseAuth()
    // tanstack query 
    const {data:cart=[]}=useQuery({
queryKey:["cart",user?.email],
queryFn:async ()=>{
    const res=await axiosSecure.get(`/carts?email=${user.email}`)
    return res.data
}
    })
return [cart]
};

export default useCart;