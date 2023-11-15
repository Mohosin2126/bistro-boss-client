import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularMenu = () => {
const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category==="popular")
            setMenu(popularItems)

        })
    },[])
console.log(menu)

    return (
        <section className="mb-12">
        <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
        ></SectionTitle>
        <div>
        </div>
        </section>
    );
};

export default PopularMenu;