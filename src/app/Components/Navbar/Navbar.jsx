'use client'
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";


export default function Navbar() {
  return (
    <NavigationMenu className="flex items-center justify-between px-8 py-4 bg-black/80 fixed top-0 left-0 w-full z-50 backdrop-blur">
      
      {/* Logo */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
            <Image
              src="/RandR logo.jpg"
              alt="Roads & Rides Logo"
              width={50}
              height={30}
              className="object-contain rounded-full"
            />
            </motion.div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Menu Items */}
      <NavigationMenuList className="flex space-x-8 text-lg font-medium">
        <NavigationMenuItem>
          <Link
            href="/Events"
            className="relative text-white hover:text-red-500 transition-colors duration-300"
          >
            Events
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/Gallery"
            className="relative text-white hover:text-red-500 transition-colors duration-300"
          >
            Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href="/Contact"
            className="relative text-white hover:text-red-500 transition-colors duration-300"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
