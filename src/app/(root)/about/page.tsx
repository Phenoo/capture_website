import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Smart from './components/Smart'
import Other from './components/Other'

import type { Metadata } from "next";
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'


export const metadata: Metadata = {
  title: "About - Capture",
  description: "Elevating Interiors With Precision",
};


const query = groq`
  *[_type=="project"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`
export const revalidate = 3600

const fetchPosts = async () => {
  try {
    const posts = await client.fetch(query);
    // Handle the fetched posts data
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
};


const Page = async () => {
  const posts = await fetchPosts()
  const data = posts.filter((_: any, i: number) => i < 3)


  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Smart />
      <Other  data={data} />
      {/* <Recent */}
    </div>
  )
}

export default Page