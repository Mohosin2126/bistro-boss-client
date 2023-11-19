import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const useCart = () => {
const axiosSecure=UseAxiosSecure()
    // tanstack query 
    const {data:cart=[]}=useQuery({
queryKey:["cart"],
queryFn:async ()=>{
    const res=await axiosSecure.get("/carts")
    return res.data
}
    })
return [cart]
};

export default useCart;