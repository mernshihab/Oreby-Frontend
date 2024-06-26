import React, { useState } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs';
import SidebarCategoryItem from './SidebarCategoryItem';
const SidebarContent = ({dropDown, categoryHeading, data}) => {
    const [showitem, setshowitem] = useState(dropDown)
    // useState(dropDown) akhane dropdown deoyar karon holo defualt vabe dropdown ti open thakbe.
    const [dropShow, setdropShow] = useState(dropDown)

  return (
    <>

        {dropShow 
            ?       
            <div onClick={()=>setshowitem(!showitem)} className='flex items-center justify-between cursor-pointer py-3'>
                <h3 className='font-dm text-xl font-bold text-[#000] '>{categoryHeading}</h3>
                <BsFillCaretDownFill></BsFillCaretDownFill>
            </div>
            :
            <h3 className='font-dm text-xm font-bold text-[#818080] cursor-pointer py-3'>{categoryHeading}</h3>
        }

        {showitem && 
            <div className='mt-4'>
                {/* Category sub item name */}
                {data.map((item)=>(

                    <SidebarCategoryItem SubdropShow={true} categoryName={item.name}>
                        {/* item.name er vitore category Name ase */}
                        {/* SubdropShow ti show korbe kina props pathano hoise */}
                        {/* SidebarCategoryItem er majhe category sub menu guli ase */}
                        {item.subCategory.map((subItem)=>(
                            <h1 className='border border-solid border-[#dfdbdb] py-3 px-3 ml-2 mt-1 cursor-pointer hover:bg-slate-800 hover:text-white duration-500'>{subItem.name}</h1>
                            /* subItem.name er vitore category sub menu Name ase */
                            /* Akhan theke sub menu design kora ase*/
                        ))}
                    </SidebarCategoryItem>
                ))}
            </div>
        }


        {/* {!dropShow && 
            <div className='mt-4'>
                {data.map((item)=>(
                    <SidebarCategoryItem SubdropShow={true} categoryName={item.name}>
                        {item.subCategory.map((subItem)=>(
                            <h1 className='border border-solid border-[#dfdbdb] py-3 px-3 ml-2 mt-1 cursor-pointer'>{subItem.name}</h1>
                        ))}
                    </SidebarCategoryItem>
                ))}
            </div>
        } */}
    </>
  )
}

export default SidebarContent