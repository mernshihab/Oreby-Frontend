import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import ContactPageButton from '../components/layout/ContactPageButton'
import Container from '../components/layout/Container'
import InputBox from '../components/layout/InputBox'
import { BsPersonCircle } from 'react-icons/bs';
import { MdEmail, MdTextsms } from 'react-icons/md';
import {BiSend } from 'react-icons/bi';

const Contact = () => {
  return (
    <Container>
      <Breadcrumb title="Contact"></Breadcrumb>

      <h2 className='font-dm font-semibold text-xl text-[#262626]'>Fill up a Form</h2>

      <div className='gap-x-5 grid grid-cols-1 lg:grid-cols-2'>

        <div className='w-full'>

          <div className='relative'>
            <InputBox InputSec="input" placeholder="Your Name" title="Name"></InputBox>
            <BsPersonCircle className='absolute top-8 right-5 text-xl'></BsPersonCircle>
          </div>

          <div className='relative'>
            <InputBox InputSec="input" placeholder="Your email here" title="Email"></InputBox>
            <MdEmail className='absolute top-8 right-5 text-2xl'></MdEmail>
          </div>

          <div className='relative'>
            <InputBox InputSec="textarea" placeholder="Write Your message here" title="Message"></InputBox>
            <MdTextsms className='absolute top-8 right-5 text-2xl'></MdTextsms>
          </div>

          <div className='relative inline-block'>
            <ContactPageButton title="Send"></ContactPageButton>
            <BiSend className='absolute top-8 right-2 text-white'></BiSend>
          </div>
        </div>

        <div className='w-full hidden sm:block sm:mt-5'>
          <img className='w-full' src='image/contact.png'></img>
        </div>
      </div>
    </Container>
  )
}

export default Contact