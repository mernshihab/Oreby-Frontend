import React, { useState } from 'react'
import { HiPlusSm } from 'react-icons/hi';

const SidebarCategoryItem = (props) => {
  const [showSubItem, setshowSubItem] = useState(false)
  const [Drop, setDrop] = useState(props.SubdropShow)

  return (
    <>

        {Drop ? 
          <div onClick={()=>setshowSubItem(!showSubItem)} className='flex items-center justify-between cursor-pointer mt-4 border border-solid border-[#dfdbdb] py-3 px-3 font-bold'>
            <p>{props.categoryName}</p>
            {/* SidebarContent er vitor theke categoryName pathaisi and akhane recived korlam */}
            <HiPlusSm></HiPlusSm>
          </div>
          :
          <p className='flex items-center justify-between cursor-pointer mt-4 border border-solid border-[#dfdbdb] py-3 px-3'>{props.categoryName}</p>
        }

        {showSubItem && 
          <div>
            {/* Sub menu item show */}
            {props.children}
          </div>
        }
    </>
  )
}

export default SidebarCategoryItem
