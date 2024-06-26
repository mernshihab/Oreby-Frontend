import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Product from './Product'
import ProductHeading from './ProductHeading'
import ProductColor from './ProductColor'
import ProductPrice from './ProductPrice'
import ProductTitle from './ProductTitle'

const SpesialOffer = () => {
  return (
    <div className='mt-28'>
    <Container>
        <ProductHeading title="Special Offers"></ProductHeading>
        <Flex className="flex-wrap mt-8 gap-x-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[1020]:grid-cols-none">
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/cap.png" badge={true}></Product>
                {/* badge show and off koranor system */}
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Smart Cap"></ProductTitle>
                    <ProductPrice price="$5.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/table.png" badge={true}></Product>
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Black Tee Table"></ProductTitle>
                    <ProductPrice price="$12.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/earPhone.png" badge={true}></Product>
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Smart Sound Ear-Phone"></ProductTitle>
                    <ProductPrice price="$4.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
            <div className='md:w-[300px] relative lg:w-auto'>
                <Product src="image/sunglass.png" badge={true}></Product>
                <div className='flex justify-between items-center mt-4'>
                    <ProductTitle title="Smart Black Sun-Glass"></ProductTitle>
                    <ProductPrice price="$11.00"></ProductPrice>
                </div>
                <ProductColor color="Black"></ProductColor>
            </div>
        </Flex>
    </Container>
</div>
  )
}

export default SpesialOffer