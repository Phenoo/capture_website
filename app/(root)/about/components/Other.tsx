import { Button } from "../../../../components/ui/button";
import React from "react";

import Image from "next/image";

import image1 from "@/assets/Link → agriwebb-headoffice.jpg.svg";
import image2 from "@/assets/Link → dsc4313_compressed_1500x1000-1024x683-1.jpg.svg";
import image3 from "@/assets/Link → whatsapp-image-2021-12-14-at-8.06.17-pm-1.jpeg.svg";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../../../../components/ProjectCard";

const Other = ({ data }: any) => {
  return (
    <div className="max-w-6xl mx-auto py-12 md:px-0 px-4 space-y-4 text-[#06004B">
      <h4 className="text-lg sm:text-xl text-[#111] md:text-2xl lg:text-3xl font-medium">
        View Other Projects
      </h4>
      <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {data.map((item: any) => (
          <ProjectCard data={item} key={item.slug.current} />
        ))}
      </div>
      <br />
      <div className="flex justify-center">
        <Link href="/projects" className="btn btn-primary hvr-fill-black">
          View Project Portfolio
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Other;
