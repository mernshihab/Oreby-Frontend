import React from 'react'
import Flex from './Flex'
import { TbCar } from 'react-icons/tb';
import { RxReload } from 'react-icons/rx';
import Container from './Container';
const AditionalInfo = () => {
  return (
    <div className='bg-[#f0f0f0] mt-[-6px] lg:px-28'>
        <Container>
        <Flex className="flex justify-between py-7">
            <div className='flex justify-center items-center gap-x-2'>
                <h1 className='font-dm font-bold text-[12px] lg:text-2xl'>2</h1>
                <p className='font-dm font-normal text-[7px] lg:text-xl'>Two years warranty</p>
            </div>
            <div className=' flex justify-center items-center gap-x-2'>
                <TbCar className='text-[12px] lg:text-2xl'></TbCar>
                <p className='font-dm font-normal text-[7px] lg:text-xl'>Free shipping</p>
            </div>
            <div className=' flex justify-center items-center gap-x-2'>
                <RxReload className='text-[12px] lg:text-2xl font-bold'></RxReload>
                <p className='font-dm font-normal text-[7px] lg:text-xl'>Two years warranty</p>
            </div>       
        </Flex>
        </Container>
    </div>
  )
}

export default AditionalInfo