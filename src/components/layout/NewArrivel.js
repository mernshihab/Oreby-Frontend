import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Product from './Product'
import ProductHeading from './ProductHeading'
import ProductColor from './ProductColor'
import ProductPrice from './ProductPrice'
import ProductTitle from './ProductTitle'

const NewArrivel = () => {
  return (
    <div className='mt-28'>
        <Container>
            <ProductHeading title="New Arrivals"></ProductHeading>
            <Flex className="flex-wrap mt-8 gap-x-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[1020]:grid-cols-none">

                <div className='md:w-[300px] relative lg:w-auto'>
                    <Product src="image/p1.png" badge={true}></Product>
                    {/* badge show and off koranor system */}
                    <div className='flex justify-between items-center mt-4'>
                        <ProductTitle title="Basic Crew Neck Tee"></ProductTitle>
                        <ProductPrice price="$44.00"></ProductPrice>
                    </div>
                    <ProductColor color="Black"></ProductColor>
                </div>
                <div className='md:w-[300px] relative lg:w-auto'>
                    <Product src="image/clock.png" badge={true}></Product>
                    <div className='flex justify-between items-center mt-4'>
                        <ProductTitle title="Basic Black Smart Watch"></ProductTitle>
                        <ProductPrice price="$40.00"></ProductPrice>
                    </div>
                    <ProductColor color="Black"></ProductColor>
                </div>

                <div className='md:w-[300px] relative lg:w-auto'>
                    <Product src="image/bag.png" badge={true}></Product>
                    <div className='flex justify-between items-center mt-4'>
                        <ProductTitle title="Gift Bag"></ProductTitle>
                        <ProductPrice price="$10.00"></ProductPrice>
                    </div>
                    <ProductColor color="Black"></ProductColor>
                </div>
                <div className='md:w-[300px] relative lg:w-auto'>
                    <Product src="image/cat.png" badge={true}></Product>
                    <div className='flex justify-between items-center mt-4'>
                        <ProductTitle title="Cat"></ProductTitle>
                        <ProductPrice price="$15.00"></ProductPrice>
                    </div>
                    <ProductColor color="Black"></ProductColor>
                </div>
               
            </Flex>
        </Container>
    </div>
  )
}

export default NewArrivel