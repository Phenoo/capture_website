import React from 'react'
import { client } from '../../../../sanity/lib/client';
import Header from '../projects/components/Header';
import { BlogContainer } from './components/BlogContainer';
import HeroProject from './components/HeroBlog';

export const revalidate = 3600

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) {
    ...,
    "mainImage": mainImage.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
};





const Page = async () => {
    const data = await getData()

  return (
    <div>
      <HeroProject />
      <div className='py-16'>
        <BlogContainer data={data} />
      </div>
    </div>
  )
}

export default Page