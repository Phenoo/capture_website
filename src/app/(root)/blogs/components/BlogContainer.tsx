import React from 'react'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import urlFor from '../../../../../sanity/lib/urlFor';

import noimage from "@/assets/noimage.png"

export const BlogContainer = ({data}: any) => {
  return (
    <div className='max-w-6xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
    {data.map((post: any) => (
      <Card key={post?.slug?.current}>
        <Image src={post.mainImage || noimage} alt="Title Image" width={500} height={500} className="rounded-t-lg h-[200px] object-cover" />

        <CardContent className="mt-5">
          <div className='h-14'>
            <h3 className="text-xl line-clamp-2 font-medium">{post?.title}</h3>
          </div>
          <div className=''>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post?.description}</p>
          </div>
          <Button asChild className="w-full mt-7">
            <Link href={`/blogs/${post?.slug?.current}`}>
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
