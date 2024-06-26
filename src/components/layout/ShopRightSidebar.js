import React from 'react'
import SidebarContent from './SidebarContent'
import { category, color, brand, Prices } from '../../dataValue/DemoData' 

const ShopRightSidebar = () => {
  return (
    <div>

        {/* sidebar main category name */}
        {/* data={category} data holo props and category asche folder/dataValue/DemoData */}
        <SidebarContent dropDown={true} categoryHeading="Shop by Category" data={category}></SidebarContent>


        {/* <SidebarContent dropDown={false} categoryHeading="Shop by Color" ></SidebarContent>
        <SidebarContent dropDown={true} categoryHeading="Shop by Brand" ></SidebarContent>
        <SidebarContent dropDown={true} categoryHeading="Shop by Price" ></SidebarContent> */}
    </div>
  )
}

export default ShopRightSidebar