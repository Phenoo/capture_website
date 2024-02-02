import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

import serviceItem1 from "@/assets/5.png";
import icon9 from "@/assets/estimte.svg";
import icon8 from "@/assets/ProjectIcon.svg";
import icon7 from "@/assets/defect.svg";
import icon6 from "@/assets/handover.svg";
import icon5 from "@/assets/team.svg";
import icon1 from "@/assets/buiildfitout.svg";

export const footerItems = [
  {
    title: "About Us",
    links: [
      { name: "Our Story", url: "/our-story" },
      { name: "Team", url: "/team" },
      { name: "Careers", url: "/careers" },
      { name: "Press", url: "/press" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "About us", url: "/about" },
      { name: "Projects", url: "/projects" },
      { name: "FAQs", url: "/faqs" },
      { name: "Support", url: "/support" },
      { name: "Contact Us", url: "/contact-us" },
    ],
  },
];

export const foot = [
  {
    name: <FaFacebook color="blue" size={22} />,
    url: "https://www.facebook.com/",
  },
  { name: <FaTwitter color="#0084ff" size={22} />, url: "https://twitter.com" },
  {
    name: <FaInstagram color="red" size={22} />,
    url: "https://www.instagram.com",
  },
  { name: <FaWhatsapp color="green" size={22} />, url: "/" },
];

export const navLinks = [
  { name: "home", url: "/" },
  { name: "about", url: "/about" },
  { name: "services", url: "/services" },
  { name: "projects", url: "/projects" },
];

export const industries = [
  {
    image: "",
    name: "Retails",
    background: "",
  },
  {
    image: "",
    name: "Office",
    background: "",
  },
  {
    image: "",
    name: "Hospitality",
    background: "",
  },
  {
    image: "",
    name: "de-fits",
    background: "",
  },
  {
    image: "",
    name: "fitness",
    background: "",
  },
  {
    image: "",
    name: "childcare",
    background: "",
  },
];

export const serviceItems = [
  {
    image: icon5,
    Service: "Initial Consultation",
    Description:
      "An initial meeting will be held todiscuss your project, understandyour vision, confirming budget +schedule.",
  },
  {
    image: icon8,
    Service: "Project Design",
    Description:
      "Our design team will provide you withprofessional design services, frominitial concepts, 3D perspectives toFull Documentation sets. All withinyour agreed budget.",
  },
  {
    image: icon9,
    Service: "Quoting",
    Description:
      "We will provide a quote for the fit-out based on the final agreed plans.During this stage w",
  },
  {
    image: icon1,
    Service: "Build / Fitout",
    Description:
      "AGC will commence theconstruction work to be completedwithin an agreed time-frame. Anappointed AGC project managerwill supervise the entire process.",
  },
  {
    image: icon7,
    Service: "Defects Inspection",
    Description:
      "AGC will commence the constructionwork to be completed within anagreed time-frame. An appointedAGC project manager will supervise",
  },
  {
    image: icon6,
    Service: "Handover",
    Description:
      "AGC will complete a final walk-through of the site to ensure allrequirements and standards are metbefore handover to the client.",
  },
];

export const serviceItems2 = [
  {
    image: icon5,
    Service: "Initial Consultation",
    Description:
      "Let's kickstart the process with an Introductory meeting to delve into your project, comprehend your vision, and establish clear parameters for budget and schedule.",
  },
  {
    image: icon8,
    Service: "Project Design & Quoting",
    Description:
      "Rely on our design experts for comprehensive design solutions, covering initial concepts, 3D perspectives, and complete documentation sets. All delivered seamlessly within your agreed-upon budget.",
  },
  {
    image: icon9,
    Service: "Quoting",
    Description:
      "Receive a tailored quote for the fit-out, aligning with the finalised agreed plans. In this stage, we'll meticulously finalise costs and iron out the finer details to ensure transparency and accuracy in your project estimation.",
  },
  {
    image: icon1,
    Service: "Build / Fitout",
    Description:
      "Capture Projects will initiate the construction tasks, aiming for timely completion within the agreed-upon time frame. We will diligently oversee the entire process, ensuring as smooth and efficient execution from start to finish.",
  },
  {
    image: icon7,
    Service: "Defects Inspection",
    Description:
      "After project completion, Capture Projects ensures perfection through meticulous defects rectification. Our dedicated project manager promptly addresses any imperfections, guaranteeing your satisfaction. Trust us for flawless fit-outs with attention to every detail.",
  },
  {
    image: icon6,
    Service: "Handover",
    Description:
      "Enter the concluding stage—the handover phase. Our skilled team ensures a smooth transition, aligning every detail with your vision. As we finalise your fit-out journey, expect a space that not only meets but surpasses your expectations.",
  },
];

export const faqItems = [
  {
    Question: "What type of gadgets do you sell?",
    Answer:
      "We sell a wide variety of gadgets, including smartphones, tablets, laptops, headphones, speakers, smartwatches, fitness trackers, and more.",
  },
  {
    Question: "What is your return policy?",
    Answer:
      "We offer a 30-day return policy on most items. Items must be in their original packaging and in like-new condition to be eligible for return. Please refer to our Return Policy page for more information.",
  },
  {
    Question: "Do you offer warranties on your products?",
    Answer:
      "Yes, we offer warranties on most of our products. Warranty periods and coverage vary by product. Please refer to the product description or contact us for more information.",
  },
  {
    Question: "How long does it take to process orders?",
    Answer:
      "Most orders are processed and shipped within 1-2 business days. Shipping times vary depending on your location and the shipping method you choose. You will receive a confirmation email with tracking information once your order has been shipped.",
  },
  {
    Question: "Do you offer free shipping?",
    Answer:
      "We offer free shipping on all orders over $50 within the continental United States. Shipping rates for international orders and orders under $50 may vary. Please refer to our Shipping Policy page for more information.",
  },
];

export const swiperITems = [
  {
    name: "Matroco Ltd.",
    review:
      "I recently had solar panels installed on my roof by this company and I couldn't be happier with the results. The whole process was smooth and the installation was completed in a timely manner. My energy bills have already decreased significantly and I'm excited to see the long-term savings.",
  },
  {
    name: "Obinna Ude",
    review:
      "I was hesitant to switch to solar energy, but this company made the transition so easy. They walked me through the process and answered all of my questions. The installation was seamless and their team was professional and courteous. I'm already seeing a difference in my energy bills and I'm so glad I made the switch.",
  },
  {
    name: "Anonymous",
    review:
      "I can't say enough good things about this company. From start to finish, they were professional, knowledgeable, and efficient. They took care of everything, from the initial consultation to the final installation. My solar panels look great and my energy bills have never been lower. I highly recommend this company to anyone considering solar energy.",
  },
  {
    name: "Collins",
    review:
      "I can't say enough good things about this company. From start to finish, they were professional, knowledgeable, and efficient. They took care of everything, from the initial consultation to the final installation. My solar panels look great and my energy bills have never been lower. I highly recommend this company to anyone considering solar energy.",
  },
];

// export const brands = [
//   {
//     image: Brand1
//   },
//   {
//     image: Brand2
//   },
//   {
//     image: Brand3
//   },
//   {
//     image: Brand4
//   },
//   {
//     image: Brand5
//   },
//   {
//     image: Brand6
//   },
// ]

// export const aboutData = [
//   {
//     title: 'Vision',
//     description: "Our vision is to be a leading provider of solar products, leveraging cutting-edge technology and innovative solutions to drive the adoption of renewable energy worldwide. We strive to create a future where clean energy is accessible to everyone, reducing our carbon footprint and preserving the planet for future generations.",
//     image: Vision
//   },
//   {
//     title: "Mission",
//     description: "Mission Statement: Our mission is to provide high-quality, reliable, and cost-effective solar products to our customers while promoting sustainable and environmentally friendly practices.",
//     image: Mission
//   }
// ]
