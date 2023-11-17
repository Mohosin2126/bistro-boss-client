import { useState } from "react";
import orderCoverImg from"../../../assets/shop/order.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/UseMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const [menu]=useMenu()
    const deserts=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const drinks=menu.filter(item=>item.category==='drinks')
    return (
        <div>
           <Cover img={orderCoverImg} title="Order Food"></Cover>


           <div>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>

  </TabList>
  <TabPanel>
    {
        salad.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
    }
  </TabPanel>
  <TabPanel>
  {
        pizza.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
    }
  </TabPanel>
  <TabPanel>
  {
        soup.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
    }
  </TabPanel>
  <TabPanel>
  {
        deserts.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
    }
  </TabPanel>
  <TabPanel>
  {
        drinks.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
    }
  </TabPanel>
</Tabs>
           </div>
        </div>
    );
};

export default Order;