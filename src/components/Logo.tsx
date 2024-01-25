import React from 'react'

import logoimg from "@/assets/Capture Projects Logo Design - (05-10-2023)-01-01 2.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <Image src={logoimg} width={153} height={50} alt='logo' className='object-contain' />
    </div>
  )
}

export default Logo