"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"

  import React from 'react'

  
  
  const ServicesNav = ({components}: any) => {
    return (
        <NavigationMenu className="bg-transparent">
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#24246B] p-0 h-auto bg-transparent">
                <p className="font-normal text-xl">Services</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid gap-3 grid-cols-2 p-4 w-[300px]  ">
            {components.map((component: any) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={`/category/${component.slug.current}`}
                >
                </ListItem>
              ))}
              <ListItem title="SERVICES" href="/services" />
            </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>

    )
  }
  
   
const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
return (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent text-[#24246B] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-bold  leading-none">{title}</div>
     
      </a>
    </NavigationMenuLink>
  </li>
)
})
ListItem.displayName = "ListItem"

  export default ServicesNav