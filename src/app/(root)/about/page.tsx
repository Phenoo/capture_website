import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Smart from './components/Smart'
import Other from './components/Other'

const Page = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Smart />
      <Other />
      {/* <Recent */}
    </div>
  )
}

export default Page