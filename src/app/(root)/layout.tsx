import type { Metadata } from "next";
import "../globals.css";

import { Public_Sans as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Capture",
  description: "Elevating Interiors With Precision",
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
          fontSans.variable
        )}
      >
        <Navbar components={category}  />
        {children}
        <Footer />
      </body>
    </html>
  );
}
