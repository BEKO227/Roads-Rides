'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Events", path: "/Events" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Videos", path: "/Videos" },  
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <NavigationMenu className="flex items-center justify-between px-6 py-4 bg-black/80 fixed top-0 left-0 w-full z-50 backdrop-blur">
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
      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          Roads <span className="text-red-500">&</span> Rides
        </h1>
      </div>

      {/* Desktop Menu */}
      <NavigationMenuList className="hidden md:flex space-x-8 text-lg font-medium">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link
              href={item.path}
              className="relative text-white hover:text-red-500 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black/90 md:hidden flex flex-col items-center space-y-6 py-6"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white text-lg hover:text-red-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </NavigationMenu>
  );
}
