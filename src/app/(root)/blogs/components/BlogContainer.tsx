import React from 'react'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import urlFor from '../../../../../sanity/lib/urlFor';

export const BlogContainer = ({data}: any) => {
  return (
    <div className='max-w-6xl mx-auto py-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
    {data.map((post: any) => (
      <Card key={post.slug.current}>
        <Image src={urlFor(post.mainImage).url()} alt="Title Image" width={500} height={500} className="rounded-t-lg h-[200px] object-cover" />

        <CardContent className="mt-5">
          <h3 className="text-xl line-clamp-2 font-bold">{post.title}</h3>

          <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>

          <Button asChild className="w-full mt-7">
            <Link href={`/blogs/${post.slug.current}`}>
              Read More
            </Link>
          </Button>

        </CardContent>
      </Card>
    ))}
  </div>  
    </div>
  )
}
