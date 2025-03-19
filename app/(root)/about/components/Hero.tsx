"use client";
import React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";
import { useAnimations } from "../../../../hooks/useFramer";
import Image from "next/image";

const Hero = ({ home }: any) => {
  const { transition, textReveal } = useAnimations();

  return (
    <div className="h-screen about-hero  bg-[#111] w-full   flex justify-center flex-col items-center relative">
      <Image
        src={
          "https://res.cloudinary.com/dnir0cslk/image/upload/v1710924627/Reception_Photo_esjntl.webp"
        }
        alt="about-hero"
        fill
        className="w-full h-full object-cover"
      />
      <div className=" bg-black/60 grid absolute   justify-center top-0 h-full gap-8 grid-cols-1 lg:grid-cols-2  mx-auto w-full">
        <div className="hidden md:block"></div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easing: "ease" }}
          className="relative w-full h-full flex overflow-hidden flex-col items-center md:items-start justify-center gap-8 p-4"
        >
          <motion.h1
            variants={textReveal}
            initial="bananin"
            whileInView="bananon"
            viewport={{ once: true }}
            transition={{ ...transition }}
            className="font-medium sm:text-left text-3xl md:text-4xl leading-none text-[#fff] "
          >
            {" "}
            {home[0]?.aboutherotext ||
              "We transform spaces with unique design and comprehensive construction knowledge"}{" "}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white"
            variants={textReveal}
            initial="bananin"
            whileInView="bananon"
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
          >
            {home[0]?.aboutdescription ||
              "Our mission is to be your partner in capturing inspiring spaces brought to life to suit your business"}
          </motion.p>

          <Link href="/services" className="btn btn-primary hvr-fill-black">
            Discover Our Projects
            <i className="fa-solid fa-arrow-right icon-arrow-corner" />
          </Link>
          {/* <Image 
                    src={ourproject}
                    alt='Oheroabout'
                    width={700}
                    height={700}
                    className='w-[700px] '
                /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
