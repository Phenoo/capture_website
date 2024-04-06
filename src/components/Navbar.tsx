"use client";
import { navLinks } from "@/data/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ServicesNav from "./ServicesNav";
import NavMenu from "./Navigation";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Navigation from "./Navigation/NavigationMain";

const Navbar = ({ components }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledx, setScrolledx] = useState(false);
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 550) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (scrollPosition > 150 && scrollPosition < 500) {
      setScrolledx(true);
    } else {
      setScrolledx(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        `flex items-center h-16 fixed top-0 w-full z-50 bg-neutral-800/50 ${
          scrolled
            ? "bg-neutral-800/70 text-white shadow-lg font-medium "
            : "text-white"
        } transition-all`,
        scrolledx ? "hidden" : "flex"
      )}
      aria-label="Navigation"
    >
      <header className=" w-[95%] lg:w-[85%] mx-auto py-2">
        <div className="flex justify-between items-center w-full">
          <Logo />
          <div className="hidden lg:block">
            <Navigation components={components} />
          </div>
          <div className="lg:hidden">
            {/* <Mobile components={components} /> */}
            <NavMenu components={components} />
            {/* <NavMenu scrolled={scrolled} /> */}
          </div>
        </div>
      </header>
      <hr />
    </motion.nav>
  );
};

export default Navbar;

{
  /* <ul className='hidden md:flex gap-6 items-center'>
{
  navLinks.filter((_, i) => i < 2).map((link) => (
    <li key={link.name}>
      <Link href={link.url} className={cn('capitalize  font-normal text-lg',
          pathname === link.url ? ' font-bold' : ''
      )}>
          {link.name}
      </Link>
    </li>
  ))
}
<li>
  <ServicesNav components={components} />
</li>
{
  navLinks.filter((_, i) => i > 2).map((link) => (
    <li key={link.name}>
      <Link href={link.url} className={cn('capitalize  font-normal text-lg',
          pathname === link.url ? ' font-bold' : ''
      )}>
          {link.name}
      </Link>
    </li>
  ))
}
{/* <li className='contact'>
  <Link href={"/contact"} className={` ${scrolled ? 'text-black border-black' : 'text-white border-white'} border rounded-2xl p-2 px-4`}>
    Contact Us
  </Link>
</li> */
}
//   <li  className={`contact rounded-3xl border-2 ${scrolled ? 'text-white border-black' : 'text-white border-black'}`}>
//   <Link href={"/contact"} className={`px-4 py-2`}>
//     Contact Us
//   </Link>
// </li>
// </ul> */}
