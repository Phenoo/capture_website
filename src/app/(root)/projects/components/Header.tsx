import React from 'react'


const Header = ({title}: {title: string}) => {
  return (
    <div  className='bg-[#b8b4ae] border-b h-64 flex items-center justify-center text-[#011E30] p-4 sm:p-8 lg:p-12 py-20 relative'>
        <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold header capitalize relative mx-2'>
            {title}
        </h4>
       
    </div>
  )
}

export default Header