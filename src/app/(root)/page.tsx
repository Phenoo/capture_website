import dynamic from "next/dynamic";

import FormComponent from "@/components/FormComponent";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import Offers from "@/components/Offers";
import Recents from "@/components/Recents";
import Vision from "@/components/Vision";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import type { Metadata } from "next";
import BlogSection from "@/components/BlogSection";
import Note from "@/components/Note";

import ColumnContainer from "@/components/ColumnContainer";
import Example from "@/components/Hori";
import Service from "@/components/Services";
import Cta from "@/components/Collab";

export const metadata: Metadata = {
  title: "Home Page - Capture",
  description:
    "Capture Projects is a Sydney based construction fitout company that specialises in design and construct projects. With a reputation of delivering exceptional projects we are the go to company for all your fitout needs throughout Sydney.",
  keywords: [
    "capture projects, capture australia, capture group projects,  capture group projects australia, capture group projects syndey,  capture  projects australia, capture  projects syndey, interior syndey, capture projects syndey, syndey works , capture interior, interior decoration, interior design, home decor, modern interior, design services,  office australia, retail australia, fitness  australia, home improvement, Australia, Aussie, melborne, syndey, caprentry",
  ],
};

const query = groq`
  *[_type=="project"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`;
const categoryquery = groq`
  *[_type=="category"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`;

const homequery = groq`
  *[_type=="home"] {
    ...,
  } 
`;

export const revalidate = 0;

const fetchPosts = async () => {
  try {
    const posts = await client.fetch(query);
    // Handle the fetched posts data
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

const fetchCategory = async () => {
  try {
    const posts = await client.fetch(categoryquery);
    // Handle the fetched posts data
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

async function getData() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) {
    ...,
    "mainImage": mainImage.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

async function getHomeData() {
  const query = `
  *[_type == 'home'] | order(_createdAt desc) {
    ...,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await fetchPosts();
  const category = await fetchCategory();
  const blogs = await getData();
  const blogPosts = blogs.filter((_: any, i: number) => i < 3);
  const home = await getHomeData();

  return (
    <main className="h-full">
      <Hero home={home} />

      <Note home={home} />

      <Service />
      {/* <Example data={category} /> */}
      <Industry data={category} />
      <Recents data={posts} />
      <BlogSection data={blogPosts} />
      <FormComponent />
    </main>
  );
}
