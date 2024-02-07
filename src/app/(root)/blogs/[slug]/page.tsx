import React from 'react'
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import { client } from '../../../../../sanity/lib/client';
import urlFor from '../../../../../sanity/lib/urlFor';
import Header from '../components/Header';


export const revalidate = 60; // Refetch blog posts every 30 seconds

async function getData(slug: string) {
    const query = `
    *[_type == 'post' && slug.current == '${slug}'] {
        ...
      }[0]
    `;

    const data = await client.fetch(query);
    return data;
};

export default async function Page({
    params
} : {params: {slug: string}}) {
    const data = await getData(params.slug);

  return (
    <div className="mt-7">
      <div className='h-16 bg-white w-full' />
            <Header title={data.title} />

           <div className='max-w-4xl mx-auto pb-20'>
           <Image
                src={urlFor(data.mainImage).url()}
                alt="Title Image"
                width={800}
                height={800}
                priority
                className="rounded-lg mt-7 border"
            />

            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                <PortableText value={data.body} />
            </div>

           </div>
        </div>
  )
}

