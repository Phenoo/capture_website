import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Book = () => {
  return (
    <div className='book p-4 md:p-8 space-y-4'>
        <h4 className='pt-12 text-lg sm:text-xl md:text-2xl font-medium'>
        Book our complimentary free consultation
        </h4>
        <div className='space-y-2'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="">First Name:</label>
                        <Input />
                    </div>
                    <div>
                        <label htmlFor="">Last Name:</label>
                        <Input />
                        
                    </div>
                </div>

                <div>
                    <label htmlFor="">Email:</label>
                    <Input />

                </div>
                <div>
                    <label htmlFor="">Phone Number:</label>
                    <Input />

                </div>
                <div>
                    <label htmlFor="">Message</label>
                <textarea  className='h-16 w-full input border bg-[#fff]' />

                </div>
            </div>
            <div className=''>
              <Button className=' text-[#24246B] rounded-3xl' variant={"outline"}>
                Contact Us
              </Button>
             </div>
    </div>
  )
}

export default Book