import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Dropdown from './Dropdown'
import Flex from './Flex'
import { AiOutlineBars, AiOutlineCaretDown} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import List  from './List';
import ListItem from './ListItem';
import Searce from './Searce';

const SearceBar = () => {
  let [CategoryDropDownShow, setCategoryDropDownShow] = useState(false)
  let [AccountDropDownShow, setAccountDropDownShow] = useState(false)
  let [CartDropDownShow, setCartDropDownShow] = useState(false)
  let Categoryref = useRef()
  let Accountref = useRef()
  let Cartref = useRef()
  
  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
      if(Categoryref.current.contains(e.target)){
        setCategoryDropDownShow(true)
      }else{
        setCategoryDropDownShow(false)
      }

      if(Accountref.current.contains(e.target)){
        setAccountDropDownShow(true)
      }else{
        setAccountDropDownShow(false)
      }

      if(Cartref.current.contains(e.target)){
        setCartDropDownShow(true)
      }else{
        setCartDropDownShow(false)
      }


    })
  },[])

  return (
    <>
      <div className='bg-[#F5F5F3] py-6'>
        <Container>
          <Flex className="flex justify-between"> 
            <div className='w-1/3 flex  items-center'>
              <Dropdown className="relative z-50" dropRef={Categoryref}> 
                <p className='flex items-center gap-x-2.5 font-dm font-normal'><AiOutlineBars></AiOutlineBars> <span className='hidden lg:block'>Shop by Category</span></p>

                {CategoryDropDownShow &&
                <List className="absolute bg-dropdownColor top-8 w-[263px] overflow-hidden">
                  <ListItem className="hover:translate-x-2 duration-700 py-3 px-3 font-dm text-white hover:text-white border-b border-solid border-[#2D2D2D]" ListItemName="Accesories"></ListItem>
                  <ListItem className="hover:translate-x-2 duration-700 py-3 pl-3 font-dm text-white hover:text-whit border-b border-solid border-[#2D2D2D]" ListItemName="Furniture"></ListItem>
                  <ListItem className="hover:translate-x-2 duration-700 py-3 pl-3 font-dm text-white hover:text-white border-b border-solid border-[#2D2D2D]" ListItemName="Electronics"></ListItem>
                  <ListItem className="hover:translate-x-2 duration-700 py-3 pl-3 font-dm text-white hover:text-white border-b border-solid border-[#2D2D2D]" ListItemName="Clothes"></ListItem>
                  <ListItem className="hover:translate-x-2 duration-700 py-3 pl-3 font-dm text-white hover:text-white border-b border-solid border-[#2D2D2D]" ListItemName="Bags"></ListItem>
                  <ListItem className="hover:translate-x-2 duration-700 py-3 pl-3 font-dm text-white hover:text-white border-b border-solid border-[#2D2D2D]" ListItemName="Home appliances"></ListItem>
                </List>
                }
              </Dropdown>

            </div>
            <div className='w-[600px] relative'>
                <Searce className='w-full py-3 px-5 focus:ring-[#c4c4c4] focus:ring-1 focus:outline-none font-dm placeholder:text-[#c4c4c4] border border-slate-300 rounded-md'  placeholder="Search Products." type="text" name="search" >
                </Searce>
                  <FiSearch className='absolute top-4 right-4'></FiSearch>
            </div>
            <div className='w-1/3 flex justify-center items-center'>
                <Flex className="w-full flex justify-center items-center gap-x-1 md:gap-x-6">
                  <Dropdown className="relative z-50" dropRef={Accountref}>
                    <div className='flex items-center text-xl md:text-2xl cursor-pointer'><RiAccountPinCircleFill></RiAccountPinCircleFill>

                    <AiOutlineCaretDown className='text-sm hidden md:block'></AiOutlineCaretDown>
                    </div>

                    {AccountDropDownShow &&
                      <List className="absolute bg-white shadow-md top-8 right-0 w-[180px] rounded-sm border">
                        <ListItem className="hover:bg-black duration-500 py-3 px-3 font-dm text-black font-normal hover:text-white border-b-[1px]" ListItemName="My Account"></ListItem>
                        <ListItem className="hover:bg-black duration-500 py-3 pl-3 font-dm text-black ont-normal hover:text-white" ListItemName="Log Out"></ListItem>
                      </List>
                      }
                  </Dropdown>

                  <div>
                    <Dropdown className="relative z-50" dropRef={Cartref}> 
                      <div className='text-xl md:text-2xl cursor-pointer'><BsFillCartCheckFill></BsFillCartCheckFill></div>

                      {CartDropDownShow &&
                        <div className='absolute top-8 right-0 w-[360px] shadow-md border'>
                          <Flex className='p-3 flex items-center gap-x-4 bg-[#F5F5F3] py-10 '>
                            <div className='w-14 h-14'>
                              <img src='image/wwww.jpg'></img>
                            </div>
                            <div>
                              <h4 className='font-dm font-bold'>Black Smart Watch</h4>
                              <h6 className='font-dm font-bold'>$44.00</h6>
                            </div>
                            <div className='ml-14'>
                              <ImCross></ImCross>
                            </div>
                          </Flex>

                          <div className='bg-white'>
                            <div className='p-3'>
                              <h4 className='font-dm font-bold'>Subtotal: $44.00</h4>
                            </div>
                            <div className='p-3 flex justify-between'>
                              <div>
                                <button className='font-dm font-bold py-4 px-10 border border-solid bg-[#262626] text-white border-[#262626] rounded-md hover:bg-white duration-500 hover:text-[#262626]'>View Cart</button>
                              </div>
                              <div>
                                <button className='font-dm font-bold py-4 px-10 border border-solid border-[#262626] rounded-md hover:bg-[#262626] duration-500 hover:text-white'>Checkout</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </Dropdown>
                  </div>
                </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default SearceBar