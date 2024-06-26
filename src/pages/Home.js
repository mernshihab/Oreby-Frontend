import React from 'react'
import AditionalInfo from '../components/layout/AditionalInfo'
import Advertise from '../components/layout/Advertise'
import Banner from '../components/layout/Banner'
import BestSellers from '../components/layout/BestSellers'
import NewArrivel from '../components/layout/NewArrivel'
import Offer from '../components/layout/Offer'
import SpesialOffer from '../components/layout/SpesialOffer'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AditionalInfo></AditionalInfo>
      <Advertise></Advertise>
      <NewArrivel></NewArrivel>
      <BestSellers></BestSellers>
      <Offer></Offer>
      <SpesialOffer></SpesialOffer>
    </>
  )
}

export default Home