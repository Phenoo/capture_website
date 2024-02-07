import React, { Suspense, cache } from 'react'


import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import { Page } from "@/types/type";
import Header from '../../projects/components/Header';
import CardContainer from '../../projects/components/CardContainer';
import Back from '@/components/Back';
import { AlertTriangle } from 'lucide-react';
import HeroCategory from '@/components/HeroCategory';
import Faq from '../../services/components/Faq';
import Stats from '../../about/components/Stats';

type Props = {
    params: {
      slug: "string";
    };
  };
  
  export const revalidate = 60;

export async function generateStaticParams(){
    const query = groq`*[__type == "category"]
    {
      slug
    }`;

    const slugs = await client.fetch(query);
    const slugRoutes = slugs.map((slug: any) => slug.slug.current)

    return slugRoutes.map((slug : string)  => ({
        slug
    }))
}

const Categorypage = async ({ params: { slug } }: Props) => {
    const query = groq`*[_type == "category" && slug.current == $slug ] {
        _id,
        title,
        description,
        "projects": *[_type=='project' && references(^._id)] {
          title,
          categories[]->,
          slug,
          publishedAt,
          ...,
        }
      }[0]`;

      const clientFetch = cache(client.fetch.bind(client));
      const tags = await clientFetch<Page>(query, { slug }); 
      const posts= tags?.projects 

  return (
      <div className=''>
      <div className='h-16 bg-white w-full' />
        <HeroCategory title={tags.title} description={tags.description || ""}  />
        {/* <Header title={slug} /> */}
        <div className='max-w-7xl mx-auto py-10'>
          <Back />
          
          <h4 className='font-bold text-xl md:text-3xl lg:text-4xl'>
            Projects related to {slug}:
          </h4>
        </div>
        {
          //@ts-ignore
          posts?.length > 0  ? 
          <CardContainer projects={posts} />
          :
          <div className='text-center flex justify-center gap-2 py-16'>
            <p className='font-medium text-lg md:text-xl'>Nothing is here </p>
            <p className='text-center'><AlertTriangle /></p>
          </div>
        }
        <Stats />
        <Faq />
      </div>

  )
}

export default Categorypage