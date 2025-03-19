import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

import serviceItem1 from "@/assets/5.png";
import icon9 from "@/assets/estimation.svg";
import icon8 from "@/assets/hook.svg";
import icon7 from "@/assets/key.svg";
import icon6 from "@/assets/handover.svg";
import icon5 from "@/assets/consulting.svg";
import icon1 from "@/assets/engineer.svg";

import partner from "@/assets/partner-50.png";
import design from "@/assets/design-thinking.png";
export const footerItems = [
  {
    title: "About Us",
    links: [
      { name: "Our Story", url: "/about" },
      { name: "Blogs", url: "/blogs" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "About us", url: "/about" },
      { name: "Projects", url: "/projects" },
      { name: "Services", url: "/services" },
      { name: "Contact Us", url: "/contact" },
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
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Projects", url: "/projects" },
  { name: "Blogs", url: "/blogs" },
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
    image: design,
    Service: "Specialist Design",
    Description:
      "Your Goals are our goals. Our Design process allows us to understand your specific business needs and objectives.",
  },
  {
    image: icon8,
    Service: "Project Management",
    Description:
      "Capture group outlines a unique end to end approach for each project to tackle project management, engineering, and construction.",
  },
  {
    image: partner,
    Service: "Continual Partnership",
    Description:
      "We believe in defect-free handover, with this commitment we offer our clients a 24-month defect liability period at no additional cost.",
  },
];

export const serviceItems2 = [
  {
    image: icon5,
    Service: "Initial Consultation",
    animation: 500,
    Description:
      "Let's kickstart the process with an Introductory meeting to delve into your project, comprehend your vision, and establish clear parameters for budget and schedule.",
  },
  {
    image: icon1,
    Service: "Project Design",
    animation: 650,
    Description:
      "Rely on our design experts for comprehensive design solutions, covering initial concepts, 3D perspectives, and complete documentation sets. All delivered seamlessly within your agreed-upon budget.",
  },
  {
    image: icon9,
    Service: "Quoting",
    animation: 800,
    Description:
      "Receive a tailored quote for the fit-out, aligning with the finalised agreed plans. In this stage, we'll meticulously finalise costs and iron out the finer details to ensure transparency and accuracy in your project estimation.",
  },
  {
    image: icon8,
    Service: "Build / Fitout",
    animation: 950,
    Description:
      "Capture Projects will initiate the construction tasks, aiming for timely completion within the agreed-upon time frame. We will diligently oversee the entire process, ensuring as smooth and efficient execution from start to finish.",
  },
  {
    image: icon7,
    Service: "Handover",
    animation: 1250,
    Description:
      "Enter the concluding stage—the handover phase. Our skilled team ensures a smooth transition, aligning every detail with your vision. As we finalise your fit-out journey, expect a space that not only meets but surpasses your expectations.",
  },
];

export const faqItems = [
  {
    Question: "What is a fitout?",
    Answer:
      "A fitout refers to the process of making interior spaces suitable for occupation. It involves the design, construction, and furnishing of commercial or residential spaces to meet specific requirements.",
  },
  {
    Question: "What types of fitout services do you offer?",
    Answer:
      "We offer a range of fitout services including office fitouts, retail fitouts, hospitality fitouts, medical fitouts, fitness fitout, beauty fitout and shop fitout.",
  },
  {
    Question: "Do you provide design services?",
    Answer:
      "Yes, we offer comprehensive design services tailored to your needs and preferences, ensuring that your space reflects your brand identity and meets functional requirements.",
  },
  {
    Question: "How long does a fitout project typically take?",
    Answer:
      "The duration of a fitout project varies depending on the size, complexity, and specific requirements of the project. We will provide you with a detailed timeline during the consultation phase.",
  },
  {
    Question: "Do you handle all aspects of the fitout process?",
    Answer:
      "Yes, we manage every aspect of the fitout process from initial design concepts to final construction and installation, ensuring a seamless and stress-free experience for our clients.",
  },
  {
    Question:
      "Are your fitout services compliant with local regulations and codes?",
    Answer:
      "Absolutely, we adhere to all relevant building codes, regulations, and standards in Sydney and ensure that our fitout projects comply with all necessary requirements.",
  },
  {
    Question: "Can you work with our existing space and budget constraints?",
    Answer:
      "Yes, we understand the importance of working within specified budgets and maximising the potential of existing spaces. Our team will work closely with you to achieve your goals while staying within budgetary constraints.",
  },
  {
    Question: "What sets your company apart from other fitout providers?",
    Answer:
      "Our commitment to quality craftsmanship, attention to detail, and personalized approach sets us apart. We prioritize client satisfaction and strive to exceed expectations on every project.",
  },
  {
    Question: "Do you offer sustainable fitout solutions?",
    Answer:
      "Yes, we are dedicated to promoting sustainable practices in all aspects of our work. We offer eco-friendly materials, energy-efficient designs, and waste reduction strategies to minimize our environmental impact.",
  },
  {
    Question: "Can you assist with obtaining necessary permits and approvals?",
    Answer:
      "Yes, we have experience navigating the permit and approval process in Sydney. We will handle all necessary paperwork and liaise with relevant authorities on your behalf.",
  },
  {
    Question:
      "How do you ensure the safety of workers and occupants during the fitout process?",
    Answer:
      "Safety is our top priority. We implement rigorous safety protocols, provide appropriate training to our staff, and adhere to all relevant occupational health and safety regulations to ensure a safe working environment.",
  },
  {
    Question: "Do you offer maintenance services after the fitout is complete?",
    Answer:
      "Yes, we offer ongoing maintenance services to ensure that your space remains in optimal condition long after the fitout is complete. Our team is available to address any issues or concerns promptly.",
  },
  {
    Question: "Can you accommodate special requirements or customisations?",
    Answer:
      "Absolutely, we understand that every project is unique and are happy to accommodate special requirements or customizations to meet your specific needs and preferences.",
  },
  {
    Question: "What payment options do you accept?",
    Answer:
      "We accept various payment methods including bank transfers, credit cards, and electronic payments for your convenience. Our team will provide you with detailed payment terms and options.",
  },
  {
    Question: "Do you provide warranties for your fitout services?",
    Answer:
      "Yes, we stand behind the quality of our workmanship and materials. We offer warranties on our fitout services to provide you with peace of mind and assurance of our commitment to excellence.",
  },
  {
    Question: "Can you provide references or examples of past projects?",
    Answer:
      "Certainly, we have a portfolio of past projects that showcase our expertise and capabilities.",
  },
  {
    Question: "How do I get started with a fitout project?",
    Answer:
      "Simply contact us to schedule an initial consultation. During this meeting, we will discuss your requirements, budget, and timeline to develop a tailored plan for your fitout project.",
  },
  {
    Question: "Do you offer free consultations?",
    Answer:
      "Yes, we offer complimentary consultations to discuss your fitout needs and provide you with an overview of our services and capabilities.",
  },
  {
    Question: "Can you assist with space planning and optimisation?",
    Answer:
      "Absolutely, our team of experts specializes in space planning and optimization to maximize functionality and efficiency in your space.",
  },
  {
    Question: "What is the best way to contact your company?",
    Answer:
      "You can reach us via phone, email, or through the contact form on our website. Our friendly team is always available to answer any questions and assist you with your fitout project.",
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
