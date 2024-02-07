import FormComponent from "@/components/FormComponent";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import Offers from "@/components/Offers";
import Recents from "@/components/Recents";
import Vision from "@/components/Vision";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home Page - Capture",
  description: "Capture Group's spirit emanates from a culture that cherishes people and relationships. As a family, we stand united — from our team to clients and subcontractors.",
  keywords: ""
};


const query = groq`
  *[_type=="project"] {
    ...,
  } 
`
const categoryquery = groq`
  *[_type=="category"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`

export const revalidate = 120

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

const fetchCategory = async () => {
  try {
    const posts = await client.fetch(categoryquery);
    // Handle the fetched posts data
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
};


export default async function Home() {
  const posts = await fetchPosts()
  const category = await fetchCategory()
  const data = posts.filter((_: any, i: number) => i < 6)


  return (
    <main className="h-full">
      <Hero />
      <Vision />
      <Offers />
      <Industry data={category} />
      <Recents data={data} />
      <FormComponent />
    </main>
  );
}
