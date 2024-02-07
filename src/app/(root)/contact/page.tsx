import React from 'react'
import Hero from '../services/components/Hero'
import Stats from '../about/components/Stats'

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us - Capture",
  description: "Elevating Interiors With Precision",
};


function Page() {
  return (
    <div>
      <Hero />
      <Stats />
    </div>
  )
}

export default Page
