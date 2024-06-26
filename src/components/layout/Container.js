import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto p-3'>{children}</div>
  )
}

export default Container