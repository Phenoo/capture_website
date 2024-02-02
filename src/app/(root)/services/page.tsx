import React from 'react'
import Working from './components/Working'
import Stats from '../about/components/Stats'
import Hero from './components/Hero'
import Offers from '@/components/Offers'
import Industry from './components/Industry'
import Sections from './components/Sections'

const Page = () => {
  return (
    <div>
      <Hero />
      <Industry />
      <Sections />
      <Stats />
      <Offers />
    </div>
  )
}

export default Page