
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
 const [menu]=useMenu()
const popular=menu.filter(item=>item.category==="popular")
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem item={item} key={item._id} ></MenuItem>)
                }
            </div>
            <button className="btn flex mx-auto btn-outline border-0 border-b-4 mt-5">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;