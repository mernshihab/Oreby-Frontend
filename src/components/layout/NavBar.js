import React from 'react'
import Image from './Images';
import List from "./List";
import Flex from "./Flex";
import ListItem from "./ListItem";
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Container from './Container';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [showListItem, setshowListItem] = useState(true)

    useEffect(()=>{
      function scrollWidth(){
        if(window.innerWidth < 769){
          setshowListItem(false)
        }else{
          setshowListItem(true)
        }
      }
      scrollWidth()
      window.addEventListener("resize", scrollWidth)
    },[])
  return (
    <nav>
      <Container>
        <Flex className="py-6 lg:flex">
          <div className="lg:w-3/12 m-auto flex">
            <Image imgsrc="image/Logo.png"></Image>
          </div>
          <div className="lg:w-9/12 w-full">
            <FaBars onClick={()=>setshowListItem(!showListItem)} className="cursor-pointer ml-auto block md:hidden"></FaBars>
            {showListItem &&
            <List className="lg:flex lg:justify-end lg:gap-x-10">
              <Link to="/"><ListItem className="font-dm text-sm font-bold my-2.5" ListItemName="Home"/></Link>
              <Link to="/Shop"><ListItem className="font-dm text-sm font-bold my-2.5" ListItemName="Shop"></ListItem></Link>
              <Link to="/About"><ListItem className="font-dm text-sm font-bold my-2.5" ListItemName="About"></ListItem></Link>
              <Link to="/Contact"><ListItem className="font-dm text-sm font-bold my-2.5" ListItemName="Contacts"></ListItem></Link>
              <ListItem className="font-dm text-sm font-bold cursor-pointer my-2.5" ListItemName="Journal"></ListItem>
            </List>
            }
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar