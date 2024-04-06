"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Video from "next-video";
import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { useAnimations } from "@/hooks/useFramer";
import { MotionDiv } from "@/lib/framer";

export default function HeroBanner({ data }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { transition, textReveal } = useAnimations();

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      if (video) {
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
        setTimeout(() => {
          if (video) {
            video.play(); // Start playing again after a short delay
          }
        }, 100); // Adjust delay as needed
      }
    };

    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup function to remove event listener
    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);
  return (
    <div className="relative h-full w-full ">
      <video
        id="myVideo"
        className="video"
        // autoPlay={true}
        ref={videoRef}
        autoPlay={true}
        loop
        muted
        playsInline={true}
        controls={false}
      >
        <source
          src=" https://res.cloudinary.com/dnir0cslk/video/upload/v1711011338/Office_-_Main_Page_e8pd2v_1_jibiqf.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dmxrtcszc/video/upload/v1710929534/Office_-_Main_Page_e8pd2v.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 bg-black/40 w-full h-full flex justify-center flex-col">
        <div className="row justify-content-center mt-10 align-items-center text-white">
          <div
            className="col-xxl-10 col-md-9 "
            data-aos-duration={1000}
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="hero-content ">
              <div className="hero-content_text-block ">
                <motion.h1
                  variants={textReveal}
                  initial="bananin"
                  whileInView="bananon"
                  viewport={{ once: true }}
                  transition={{ ...transition }}
                  className="hero-content__title heading-xl text-white "
                >
                  {data.title}
                </motion.h1>
              </div>
              <MotionDiv
                initial="bananin"
                whileInView="bananon"
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.4 }}
                className="hero-content_button-group p-2"
              >
                <Link
                  href="/contact"
                  className="btn btn-primary hvr-fill-black"
                >
                  Get in touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="btn btn-white hvr-white-primary"
                >
                  our works
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
