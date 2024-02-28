

"use client"

import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'

const FormComponent = () => {
  return (
    <div className='form-hero min-h-[85vh] flex justify-center items-center text-[#111] p-4 form'>
        <div className='bg-white w-full sm:w-96 min-h-96 p-4 rounded-md'>
            <h4 className='font-medium text-center text-xl'>
                CONTACT US FOR A FREE <br /> QUOTE
            </h4>
            <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
 <div className='space-y-2'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="">First Name:</label>
                        <Input  
                          name="firstName"
                          required
                          maxLength={500}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Last Name:</label>
                        <Input
                          name="lastName"
                          required
                          maxLength={500}
                        />                        
                    </div>
                </div>

                <div>
                    <label htmlFor="">Email:</label>
                    <Input 
                      name="senderEmail"
                      type="email"
                      required
                      maxLength={500}
                    />

                </div>
                <div>
                    <label htmlFor="">Phone Number:</label>
                    <Input 
                     name="phoneNumber"
                     type="tel"
                     required
                     maxLength={500}
                    />

                </div>
                <div>
                    <label htmlFor="">Message</label>
                <textarea  className='h-16 w-full input border bg-[#ffa5001a]' 
                  name="message"
                  required
                  maxLength={5000}
                />

                </div>
            </div>
            <div className='mx-auto flex justify-center items-center'>
              <Button  type='submit' >
               Submit
              </Button>
             </div>

      </form>
           
        </div>
    </div>
  )
}

export default FormComponent