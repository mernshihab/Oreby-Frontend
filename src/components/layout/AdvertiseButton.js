import React from 'react'

const AdvertiseButton = ({children}) => {
  return (
    <div className='absolute top-[65%] text-[8px] lg:top-[65%] left-[10%] bg-[#262626] py-[3px] px-2 lg:py-4 lg:px-10 rounded text-white lg:text-xl font-dm font-bold'>{children}</div>
  )
}

export default AdvertiseButton