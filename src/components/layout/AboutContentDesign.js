import React from 'react'

const AboutContentDesign = ({title, history}) => {
  return (
    <>
        <div className='font-dm text-normal font-bold'>{title}</div>
        <div className='font-dm text-normal font-regular'>{history}</div>
    </>
  )
}

export default AboutContentDesign