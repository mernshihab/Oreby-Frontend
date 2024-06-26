import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import Container from '../components/layout/Container'
import AboutContentDesign from '../components/layout/AboutContentDesign'
const About = () => {
  return (
    <Container>
      <Breadcrumb title="About"></Breadcrumb>

      <div className='gap-x-10 grid grid-cols-1 sm:grid-cols-2'>
        <div className='w-full'>
          <img className='w-full' src="image/about1.png"></img>
        </div>
        <div className='w-full mt-3 md:mt-0'>
          <img src="image/about2.png"></img>
        </div>
      </div>

      <div className='mt-28 gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <div className='w-full'>
            <AboutContentDesign  title="Our Vision" history="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AboutContentDesign>
          </div>
          <div className='w-full mt-4 sm:mt-0'>
            <AboutContentDesign  title="Our Story" history="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AboutContentDesign>
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <AboutContentDesign  title="Our Brands" history="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AboutContentDesign>
          </div>
      </div>
    </Container>
  )
}

export default About