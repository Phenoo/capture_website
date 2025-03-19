import Image from "next/image";
import Link from "next/link";

import "../../../globals.scss";
import story from "@/assets/aboutmain.webp";
import { ArrowUpRight } from "lucide-react";

export default function About({ home }: any) {
  return (
    <div className="a fix-hero min-h-screen">
      <div className="bg-neutral-800/80 text-white h-full min-h-screen w-full flex flex-col justify-center items-center">
        <div
          className="max-w-5xl mx-auto flex flex-col  h-full"
          data-aos-duration={1000}
          data-aos="fade-left"
        >
          <div className="content-text-block">
            <span className="subtitle">about company</span>
            <h2 className="content-title heading-md">
              {home[0]?.aboutcompany ||
                " We design buildings, interiors and streetscapes."}
            </h2>
            <br />
            <p className="sm:text-lg md:text-xl">
              {home[0]?.aboutcompanydesc ||
                " At Capture Group, our journey began with a shared passion for transforming spaces into exceptional environments. Capture Projects is on a mission to redefine the fitout and refurbishment experience in Sydney, Australia."}
              <br />
              <br />
              {home[0]?.aboutcompanydesc2 ||
                "Driven by a commitment to excellence and innovation, our mission is simple: to bring visions to life. From the initial spark of an idea to the final flourish of construction, we&apos;ve dedicated ourselves to mastering the art of design and construct."}
            </p>
          </div>
          <br />
          <div className="flex justify-center items-center md:justify-start md:items-start">
            <Link href="/services" className="btn btn-primary hvr-fill-black">
              Our Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
