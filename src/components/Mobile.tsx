"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { foot, navLinks } from "@/data/data"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { VscMenu } from "react-icons/vsc"
import Logo from "./Logo"
import ServicesNav from "./ServicesNav"

export function Mobile({components}: any) {
    const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <VscMenu color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-6">
        <ul className='flex flex-col gap-6'>
              {
               navLinks.filter((_, i) => i < 2).map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className={cn('capitalize  font-normal text-xl',
                        pathname === link.url ? ' font-black' : 'text-[#24246B]'
                    )}>
                      <SheetClose>
                      {link.name}

                      </SheetClose>
                    </Link>
                  </li>
                ))
              }
              <ServicesNav components={components} />

{
               navLinks.filter((_, i) => i > 2).map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className={cn('capitalize  font-normal text-xl',
                        pathname === link.url ? ' font-black' : 'text-[#24246B]'
                    )}>
                      <SheetClose>
                      {link.name}

                      </SheetClose>
                    </Link>
                  </li>
                ))
              }
              <li>
               <SheetClose>
                <Link href={"/contact"} className='bg-[#24246B] text-white rounded-2xl p-2 px-4'>
                  Contact Us
                </Link>
               </SheetClose>
              </li>
            </ul>
        </div>
        <SheetFooter>
            <div className='flex gap-2 items-center  mt-12'>
              {
                foot.map((item, i) => (
                  <div key={i} className='bg-white p-1 rounded-md cursor-pointer transition-all hover:scale-95'>
                    {item.name}
                  </div>
                ))
              }
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
