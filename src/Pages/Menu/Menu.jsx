import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

import menuImg from"../../assets/menu/menu-bg.jpg"
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
      <Cover img={menuImg} title='Our menu'></Cover>
      </div>
      <SectionTitle subHeading="Don't  Miss Today's Offer" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
        </div>
    );
};

export default Menu;