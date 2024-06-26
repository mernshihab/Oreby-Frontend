import React from 'react'

const InputBox = (props) => {
  return (
    <div>
        <h4 className='font-dm font-semibold text-sm mt-12'>{props.title}</h4>
        <props.InputSec placeholder={props.placeholder} className="border border-solid outline-none w-full px-5 py-3 focus:border-[#a8a6a6] rounded-md mt-2"></props.InputSec>

    </div>
  )
}

export default InputBox