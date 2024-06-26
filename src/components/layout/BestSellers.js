import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Product from './Product'
import ProductHeading from './ProductHeading'
import ProductColor from './ProductColor'
import ProductPrice from './ProductPrice'
import ProductTitle from './ProductTitle'
const BestSellers = () => {
  return (
    <div className='mt-28'>
    <Container>
        <ProductHeading title="Our Bestsellers"></ProductHeading>
        <Flex className="flex-wrap mt-8 gap-x-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[1020]:grid-cols-none">
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/bottol.png" badge={true}></Product>
                {/* badge show and off koranor system */}
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Classic Bottol"></ProductTitle>
                    <ProductPrice price="$8.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/bag2.png" badge={true}></Product>
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Smart Bag"></ProductTitle>
                    <ProductPrice price="$25.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/mosla.png" badge={true}></Product>
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Healty Masala"></ProductTitle>
                    <ProductPrice price="$5.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/bag3.png" badge={true}></Product>
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Smart Black Bag"></ProductTitle>
                    <ProductPrice price="$28.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
        </Flex>
    </Container>
</div>
  )
}

export default BestSellers