"use client"
import React from 'react'
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div  className='bg-[#011E30] text-white p-4 sm:p-8 lg:p-12 py-20'>
        <div className='flex items-center justify-center lg:gap-16 md:gap-8 md:flex-row flex-col gap-4'>
            <div className='text-center'>
                <h4 className="capitalize text-xl  md:text-2xl lg:text-4xl font-semibold">
                    <CountUp start={100} end={11000} duration={3} />

                    {/* 11,000  */}
                    <span className='text-[#979DAC] lowercase'>m2</span> </h4>
                <p className='text-[#979DAC] mt-4'>
                Designed, delivered and transformed
                </p>
            </div>

            <div className='text-center'>
                <h4 className="capitalize text-xl  md:text-2xl lg:text-4xl font-semibold">
                <CountUp start={0} end={70} duration={3} />
                    
                    {/* 70  */}
                <span className='text-[#979DAC]'>+</span> </h4>
                <p className='text-[#979DAC] mt-4'>
                Successful projects delivered on time and on budget
                </p>
            </div>

            <div className='text-center'>
                <h4 className="capitalize text-xl  md:text-2xl lg:text-4xl font-semibold">
                <CountUp start={0} end={65} duration={3} />
                    
                     {/* 65  */}
                <span className='text-[#979DAC]'>+</span> </h4>
                <p className='text-[#979DAC] mt-4'>
                Happy repeat clients
                </p>
            </div>

        </div>
    </div>
  )
}

export default Stats