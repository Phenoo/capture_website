import React from 'react'
import Header from './components/Header'

import { groq } from "next-sanity"
import { client } from '../../../../sanity/lib/client';
import CardContainer from './components/CardContainer';



const query = groq`
  *[_type=="project"] {
    ...,
  } 
`

export const revalidate = 0

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


  return (
    <div className='min-h-screen'>
        <Header title='Latest Projects' />
        <div className='max-w-7xl mx-auto '>
          <CardContainer projects={posts} />
        </div>
    </div>
  )
}

export default Page