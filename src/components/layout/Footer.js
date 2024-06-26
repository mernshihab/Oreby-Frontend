import React from 'react'
import Container from './Container'
import Flex from "./Flex";
import List from "./List";
import FooterItemDesign from './FooterItemDesign';
import Images from './Images';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex-wrap mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[1020]:grid-cols-none px-5 ">
          <div className="w-full mb-3 sm:mb-0">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>

              <Link to="/">
                <FooterItemDesign ListItemName="Home" href="#"></FooterItemDesign>
              </Link>

              <Link to="/Shop">
                <FooterItemDesign ListItemName="Shop" href="#"></FooterItemDesign>
              </Link>

              <Link to="/About">
                <FooterItemDesign ListItemName="About" href="#"></FooterItemDesign>
              </Link>

              <Link to="/Contact">
                <FooterItemDesign ListItemName="Contact" href="#"></FooterItemDesign>
              </Link>

              <FooterItemDesign ListItemName="Journal" href="#"></FooterItemDesign>
            </List>
          </div>
          <div className="w-full mb-3 sm:mb-0">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List className="mt-4">
              <FooterItemDesign ListItemName="Category 1" href="#"/>
              <FooterItemDesign ListItemName="Category 2" href="#"/>
              <FooterItemDesign ListItemName="Category 3" href="#"/>
              <FooterItemDesign ListItemName="Category 4" href="#"/>
              <FooterItemDesign ListItemName="Category 5" href="#"/>
              
            </List>
          </div>
          <div className="w-full sm:mt-5 lg:mt-0">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <FooterItemDesign ListItemName="Privacy Policy" href="#"/>
              <FooterItemDesign ListItemName="Terms & Conditions" href="#"/>
              <FooterItemDesign ListItemName="Special E-shop" href="#"/>
              <FooterItemDesign ListItemName="Shipping" href="#"/>
              <FooterItemDesign ListItemName="Secure Payments" href="#"/>
              <FooterItemDesign ListItemName="Privacy Policy" href="#"/>
                 
            </List>
          </div>
          <div className="w-full sm:mt-5 lg:mt-0 lg:justify-center ">
            <div>
              <h6 className="mb-4 font-dm text-base font-light">
                email@admin.com
              </h6>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                121 Dhaka, Bangladesh, Road no-6  House no-18951
              </p>
            </div>
          </div>
          <div className="w-[40%] mt-6">
            <Images imgsrc="image/Logo.png" />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer