import Image from "next/image";
import Reveal from "./Reveal";
import PortableBody from "./portable";

export default function Note({ home }: any) {
  return (
    <div className="content-section-02 py-28">
      <div className="container">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 md:gap-12">
          <Reveal width="100%">
            <div className="m" data-aos-duration={1000} data-aos="fade-left">
              <div className="content-image-02">
                <Image
                  height={477}
                  width={436}
                  src="https://res.cloudinary.com/dnir0cslk/image/upload/v1709919396/Retail_Photo_2_v8ur9q.webp"
                  alt="content image"
                  className="w-100 h-auto"
                />
              </div>
            </div>
          </Reveal>
          <div className="" data-aos-duration={1000} data-aos="fade-right">
            <div className="flex flex-col gap-y-4 space-y-4">
              <Reveal width="100%">
                <div className="content-text-block-02">
                  <span className="subtitle">Trusted experience</span>
                  <h2 className="content-title heading-md text-black mb-16">
                    {home[0]?.trusttitle ||
                      "Commercial Design, Construction & Refurbishment"}
                  </h2>
                  <p className="m-0 mb-0 sm:text-lg md:text-xl">
                    {home[0]?.trustdesc ||
                      `
                      Capture Group's spirit emanates from a culture that
                      cherishes people and relationships. Design and construct
                      excellence define our projects, as we infuse each interior
                      fitout and refurbishment with expertise and a personal
                      touch. Capture Group is more than construction; it's a
                      journey, a commitment to quality, and testament to enduring
                      relationships.
                      `}
                  </p>
                </div>
              </Reveal>

              <Reveal width="100%">
                <div className="content-list-block">
                  <ul className="content-list">
                    <li className="content-list-item">Design and Construct</li>
                    <li className="content-list-item">Refurbishment</li>
                    <li className="content-list-item">Commercial Fitout</li>
                    <li className="content-list-item">Office Fitout</li>
                  </ul>
                  <ul className="content-list">
                    <li className="content-list-item">Project Management</li>
                    <li className="content-list-item">
                      End of Lease De-Fit &amp; Make Good
                    </li>
                    <li className="content-list-item">Base Build Fitout</li>
                    <li className="content-list-item">
                      Commercial Maintenance
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client"
// import { useRef, useEffect } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';

// const phrase = "Capture Group spirit emanates from a culture that cherishes people and relationships. Design and construct excellence define our projects, as we infuse each interior fitout and refurbishment with expertise and a personal touch. Capture Group is more than construction; it';s a journey, a commitment to quality, and testament to enduring relationships.";
// const title = "Commercial Design, Construction & Refurbishment."
// export default function Home() {

//   let refs = useRef([]);
//   const body = useRef(null);
//   const container = useRef(null);

//   useEffect( () => {
//     gsap.registerPlugin(ScrollTrigger);
//     createAnimation();
//   }, [])

//   const createAnimation = () => {
//       gsap.to(refs.current, {
//         scrollTrigger: {
//             trigger: container.current,
//             scrub: true,
//             start: `top`,
//             end: `+=${window.innerHeight / 2.5}`,
//         },
//         opacity: 1,
//         ease: "none",
//         stagger: 0.1
//     })
//   }

//   type Phrase = string;

//   const splitWords = (phrase: Phrase): JSX.Element[] => {
//     const body: JSX.Element[] = [];
//     phrase.split(" ").forEach((word, i) => {
//       const letters = splitLetters(word);
//       body.push(<p key={word + "_" + i} className='text-xl md:text-4xl lg:text-[2vw]'>{letters}</p>);
//     });
//     return body;
//   };

//   const splitLetters = (word: string): JSX.Element[] => {
//     const letters: JSX.Element[] = [];
//     word.split("").forEach((letter, i) => {
//       //@ts-ignore
//       letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>);
//     });
//     return letters;
//   };

//   const splitWordsf = (phrase: Phrase): JSX.Element[] => {
//     const body: JSX.Element[] = [];
//     phrase.split(" ").forEach((word, i) => {
//       const letters = splitLettersf(word);
//       body.push(<p key={word + "_" + i} className='text-3xl font-medium md:text-5xl lg:text-[3.5vw]'>{letters}</p>);
//     });
//     return body;
//   };

//   const splitLettersf = (word: string): JSX.Element[] => {
//     const letters: JSX.Element[] = [];
//     word.split("").forEach((letter, i) => {
//       //@ts-ignore
//       letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>);
//     });
//     return letters;
//   };

//   return (
//     <div ref={container} className={"main bg-[#b8b4ae] px-4 md:px-24 "}>
//      <div ref={body} className={'body h-10'}>
//         {
//           splitWordsf(title)
//         }
//       </div>
//       <div ref={body} className={'body'}>
//         {
//           splitWords(phrase)
//         }
//       </div>
//     </div>
//   )
// }
// // "use client"
// // import React, { useRef } from 'react'
// // import Reveal from './Reveal'
// // import { useScroll } from 'framer-motion'

// // const Note = () => {
// //   const element = useRef(null)
// //   const { scrollYProgress} = useScroll({
// //     target: element,
// //     offset: ["start 0.9", "start start"]
// //   })
// //   return (
// //     <Reveal width='100%'>
// //     <div className='bg-[#b8b4ae] py-12 lg:py-28 px-2 sm:px-4'>
// //            <div className='max-w-5xl mx-auto space-y-8'>
// //            <h1 className='font-medium text-2xl md:text-3xl lg:text-5xl capitalize text-white'>
// //             Commercial Design, Construction &amp; Refurbishment.
// //             </h1>
// //             <p className='text-base sm:text-lg md:text-xl text-white'>
// //                 Capture Group&#39;s spirit emanates from a culture that cherishes people and
// //                 relationships. Design and construct excellence define our projects, as we infuse each
// //                 interior fitout and refurbishment with expertise and a personal touch. Capture Group
// //                 is more than construction; it&#39;s a journey, a commitment to quality, and testament to
// //                 enduring relationships.
// //             </p>
// //            </div>
// //     </div>
// //     </Reveal>

// //   )
// // }

// // export default Note
