import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const FormComponent = () => {
  return (
    <div className='form-hero min-h-screen flex justify-center items-center text-[#24246B] p-4'>
        <div className='bg-white w-96 min-h-96 py-4 rounded-md'>
            <h4 className='font-black text-center text-xl'>
                CONTACT US FOR A FREE <br /> QUOTE
            </h4>
            <div className='space-y-1 p-4 '>
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
                    <label htmlFor="">Project Type:</label>
                    <Input />

                </div>
                <div>
                    <label htmlFor="">Please Provide more details:</label>
                <textarea  className='h-16 w-full input border bg-[#ffa5001a]' />

                </div>
            </div>
            <div className='mx-auto flex justify-center items-center'>
              <Button className='border-4 border-[#24246B]' variant={"outline"}>
               Submit
              </Button>
             </div>
        </div>
    </div>
  )
}

export default FormComponent