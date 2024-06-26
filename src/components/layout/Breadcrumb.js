import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({title}) => {
  return (
    <div className='my-28'>
        <h1 className='font-dm font-bold text-3xl'>{title}</h1>
        <p className='font-dm font-regular text-sm mt-2 text-[#767676]'><Link to="/"> Home</Link> > {window.location.pathname.split("/")[1]}</p>
        {/* split use kora hoiyese just formating korar jonno */}
    </div>
  )
}

export default Breadcrumb