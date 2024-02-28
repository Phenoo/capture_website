"use client"

import { BlogContainer } from '@/app/(root)/blogs/components/BlogContainer'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const BlogSection = ({data}: any) => {
  const router = useRouter()

  return (
    <div className='max-w-6xl mx-auto space-y-6 py-10 px-2'>
     <h4 className='font-medium text-xl sm:text-3xl lg:text-4xl capitalize'>
            Trending Posts
        </h4>  
        <BlogContainer data={data} />

        <div className='mx-auto max-w-7xl flex justify-center items-center'>
              <Link href={"/blogs"} className='font-medium underline'>
                View All Posts
              </Link>
             </div>
    </div>
  )
}

export default BlogSection