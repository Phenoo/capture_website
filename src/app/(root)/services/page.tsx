import React from 'react'
import Working from './components/Working'
import Stats from '../about/components/Stats'
import Hero from './components/Hero'
import Offers from '@/components/Offers'
import Industry from './components/Industry'
import Sections from './components/Sections'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import Faq from './components/Faq'

const categoryquery = groq`
  *[_type=="category"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`

const fetchCategory = async () => {
  try {
    const posts = await client.fetch(categoryquery);
    // Handle the fetched posts data
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
};

export const revalidate = 3600

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services - Capture",
  description: "Elevating Interiors With Precision",
};

const Page = async () => {
  const category = await fetchCategory()

  return (
    <div>
      <div className='h-16 bg-white w-full' />
      <Hero />
      <Industry   />
      <Sections data={category} />
      <Stats />
      <Offers />
      <Faq />
    </div>
  )
}

export default Page