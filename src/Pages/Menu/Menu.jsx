import { Helmet} from 'react-helmet-async';

import menuImg from '../../assets/menu/menu-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';



const Menu = () => {
const [menu]=useMenu()
const deserts=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <Helmet>
        <title>Bistro|Menu</title>
      </Helmet>
      <div>
        {/* main cover */}
      <Cover img={menuImg} title='Our menu'></Cover>
      </div>
      {/* Offer Items */}
      <SectionTitle subHeading="Don't  Miss Today's Offer" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
      items={deserts}
      
      title='dessert'
       coverImg={dessertImg}
      
      ></MenuCategory>


      {/* pizza */}
      <MenuCategory
      items={pizza}
      
      title='pizza'
       coverImg={pizzaImg}
      
      ></MenuCategory>
      {/* salad */}
      <MenuCategory
      items={salad}
      title='salad'
       coverImg={saladImg}
      ></MenuCategory>

      {/* soup */}
      <MenuCategory
      items={soup}
      
      title='soup'
       coverImg={soupImg}
      
      ></MenuCategory>
        </div>
    );
};

export default Menu;