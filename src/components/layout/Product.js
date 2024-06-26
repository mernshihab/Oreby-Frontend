import React from 'react'
import Images from './Images'
import ProductBadge from './ProductBadge'
import { AiFillHeart } from 'react-icons/ai';
import { RiLoader3Line } from 'react-icons/ri';
import { BsFillCartFill } from 'react-icons/bs';

const Product = ({src, badge}) => {
  return (
    <div className='shadow-md '>

      <div className='relative overflow-hidden group'>
      <Images className="w-full" imgsrc={src}></Images>
        {badge && 
            <ProductBadge title="New"></ProductBadge>
        }
        
        <div className='absolute bg-white h-34 px-2.5 py-3 ease-in duration-700 w-full bottom-[-62%] lg:bottom-[-74%] group-hover:bottom-0 right-0 '>
          <div className='flex justify-end mt-6 gap-x-2 items-center'>
            <h4 className='font-dm text-xm font-normal text-[#767676] hover:font-bold hover:duration-500 hover:text-black'>Add to Wish List</h4>
            <AiFillHeart></AiFillHeart>
          </div>
          <div className='flex justify-end mt-6 gap-x-2 items-center'>
            <h4 className='font-dm text-xm font-normal text-[#767676] hover:font-bold hover:duration-500 hover:text-black'>Compare</h4>
            <RiLoader3Line></RiLoader3Line>
          </div>
          <div className='flex justify-end mt-6 gap-x-2 items-center'>
            <h4 className='font-dm text-xm font-normal text-[#767676] hover:font-bold hover:duration-500 hover:text-black'>Add to Cart</h4>
            <BsFillCartFill></BsFillCartFill>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Product