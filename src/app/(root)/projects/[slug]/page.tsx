import React from 'react'
import { client } from '../../../../../sanity/lib/client';
import { groq } from 'next-sanity';
import SlugComponent from './SlugComponent';
import Header from '../components/Header';



const fetchArticleData = async (slug: string) => {
  const result = await client.fetch(
    groq`
      *[_type == "project" && slug.current == $slug][0]{
        ...,
        "mainImage": mainImage.asset->url,
      }`,
    { slug }
  );
  return result;
};


type Props = {
  params: { slug: string };
};


const Page = async ({params}: Props) => {
  const data = await fetchArticleData(params.slug)

  console.log(data);

  return (
    <div className='min-h-screen'>
      <Header title={data.title} />
      <SlugComponent data={data} />
    </div>
  )
}

export default Page