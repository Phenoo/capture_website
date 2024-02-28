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
  description: "Capture Projects is a Sydney based construction fitout company that specialises in design and construct projects. With a reputation of delivering exceptional projects we are the go to company for all your fitout needs throughout Sydney",
  keywords: ["about capture projects,about  capture australia, about capture group projects,  about capture group projects australia, capture projects, capture australia, capture group projects,  capture group projects australia, capture group projects syndey,  capture  projects australia, capture  projects syndey , capture interior, interior decoration, interior design, home decor, modern interior, design services,  office australia, retail australia, fitness  australia, home improvement, Australia, Aussie, melborne, syndey, caprentry"],
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