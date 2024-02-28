import type { Metadata } from "next";
import "../globals.css";

import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
 
import { Toaster } from "react-hot-toast";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: {
    default: "Capture Group Projects",
    template: "%s - Capture Group Projects",
  },
  applicationName: "Capture Group Projects", 
  description: "Capture Projects is a Sydney based construction fitout company that specialises in design and construct projects. With a reputation of delivering exceptional projects we are the go to company for all your fitout needs throughout Sydney.",
  keywords: ["capture projects, capture australia, capture group projects,  capture group projects australia, capture group projects syndey,  capture  projects australia, capture  projects syndey , capture interior, interior decoration, interior design, home decor, modern interior, design services,  office australia, retail australia, fitness  australia, home improvement, Australia, Aussie, melborne, syndey, caprentry"],
  referrer: "origin-when-cross-origin",
 generator: "Next.js",

};


const categoryquery = groq`
  *[_type=="category"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`

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

export const revalidate = 3600
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const category = await fetchCategory()
  
  return (
    <html lang="en">
        <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.className
        )}
      >
        <Navbar components={category}  />
        
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
