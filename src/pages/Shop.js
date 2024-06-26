import Container from '../components/layout/Container'
import Breadcrumb from '../components/layout/Breadcrumb';
import Flex from '../components/layout/Flex'
import Pagination from '../components/layout/Pagination';
import { useState } from 'react';
import ShopRightSidebar from '../components/layout/ShopRightSidebar';
import {BsFilterLeft} from "react-icons/bs"
const Shop = () => {

  let [menuShow, setmenuShow] = useState(false)

  const [FeaturedShow, setFeaturedShow] = useState(12)
  let handleFeatured = (e)=>{
    setFeaturedShow(+e.target.value)
  }
  return (
    <div>
      <Container>
        <Breadcrumb title="Product"></Breadcrumb>
        
          <div className='md:flex md:items-center'>
          
          <div>
            <select  id="countries" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Featured</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

            <h3 className='md:ml-4 font-dm text-xm font-normal text-[#767676] mt-3'>Show Product Page :</h3>
          <div className='md:ml-4'>
            {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
              <select onChange={handleFeatured} id="countries" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Select</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="15">15</option>
              </select>
          </div>
          </div>

          <div className="text-2xl">
            <BsFilterLeft onClick={()=>setmenuShow(!menuShow)} className="sm:hidden"></BsFilterLeft>
          </div>

        <Flex className="flex gap-x-5 relative">
          <div className='w-full md:w-[70%] shadow-md p-3'>        
            <Pagination itemsPerPage={FeaturedShow}></Pagination>
          </div>
          {menuShow &&
            <div className='w-full sm:w-[30%] sm:shadow-md p-3 absolute top-0 left-0 sm:static bg-[#E8E8E8]'>
              <ShopRightSidebar></ShopRightSidebar>
            </div>         
      
          }
          <div className='w-full sm:w-[30%] sm:shadow-md p-3 hidden sm:block'>
            <ShopRightSidebar></ShopRightSidebar>
          </div> 
        </Flex>
      </Container>
    </div>
  )
}

export default Shop