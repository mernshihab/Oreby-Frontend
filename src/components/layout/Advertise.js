import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Flex from './Flex'
import Images from './Images'
import AdvertiseButton from './AdvertiseButton'
const Advertise = () => {
  return (
    <div className='mt-3 lg:mt-24'>
    <Container>
        <Flex className="flex gap-1 lg:gap-x-10">
            <div className='w-2/4 relative'>
                <Images imgsrc="image/Ad1.png"></Images>
            </div>
            <div className='w-2/4'>
                <div className='relative'>
                    <Images className="inline-block mb-2 lg:mb-10" imgsrc="image/Ad2.png">
                    </Images>
                    <AdvertiseButton>
                        <button>Shop Now</button>
                    </AdvertiseButton>
                </div>
                <div className='relative'>
                    <Images className="inline-block mb-2 lg:mb-10" imgsrc="image/Ad2.png">
                    </Images>
                    <AdvertiseButton>
                        <button>Shop Now</button>
                    </AdvertiseButton>
                </div>
        
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Advertise