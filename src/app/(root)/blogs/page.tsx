import React from 'react'
import { client } from '../../../../sanity/lib/client';
import Header from '../projects/components/Header';
import { BlogContainer } from './components/BlogContainer';

export const revalidate = 60; // Refetch blog posts every 30 seconds

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) {
    ...
  }`;

  const data = await client.fetch(query);
  return data;
};




const Page = async () => {
    const data = await getData()

    console.log(data)
  return (
    <div>
      <div className='h-16 bg-white w-full' />
      <Header title='Blogs' />
      <BlogContainer data={data} />
    </div>
  )
}

export default Page