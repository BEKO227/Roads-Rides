"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const sponsors = [
    {
      name: "Porsche Centre Egypt",
      img: "/Porsche.jpeg",
      desc: "Partnering in Track Days & Exotic Drag Race events, showcasing 911 GT3 RS, Panamera G3 & more.",
      delay: 0,
    },
    {
      name: "dubizzle Egypt",
      img: "/dubizzle.png",
      desc: "Sponsored the Gold Race, supporting Egypt's automotive community and engaging enthusiasts.",
      delay: 0.1,
    },
    {
      name: "Protect Me Egypt",
      img: "/ProtectMe.jpeg",
      desc: "Provides premium car protection services for members and event participants.",
      delay: 0.2,
    },
    {
      name: "Mobil 1 Egypt",
      img: "/mobil1.png",
      desc: "High-performance engine oils supporting our supercar track days.",
      delay: 0.3,
    },
    {
    name: "Apex Egypt",
    img: "/apex.jpeg",
    desc: "Precision automotive performance partner, enhancing tuning and track experiences.",
    delay: 0.4,
     },
     {
      name: "Kouger Ethanol",
      img: "/Kouger.png",
      desc: "Official ethanol fuel sponsor, supporting sustainable high-performance driving.",
      delay: 0.5,
    },
    {
      name: "We Gold",
      img: "/wegold.png",
      desc: "Official luxury sponsor supporting our exclusive automotive events.",
      delay: 0.6,
    },
    {
      name: "Orange Premiere",
      img: "/orange-premiere.png",
      desc: "Top-tier media and event coverage",
      delay: 0.7,
    },
    {
      name: "Tzkarti",
      img: "/tzkarti.png",
      desc: "Innovative digital ticketing solutions",
      delay: 0.8,
    },
    {
      name: "SVNTWLV",
      img: "/svntwlv.jpeg",
      desc: "Exclusive lifestyle brand partner",
      delay: 0.9,
    },
    {
      name: "Helpoo",
      img: "/helpoo.png",
      desc: "Supporting automotive enthusiasts",
      delay: 1,
    },
    {
      name: "ProjectX",
      img: "/projectx.jpg",
      desc: "Innovative automotive project and tech partner",
      delay: 1.1 ,
    },
    {
      name: "ELF",
      img: "/elf.jpg",
      desc: "Official motor oil partner, supporting high-performance events and car enthusiasts.",
      delay: 1.2,
    },
  ];
  return (
<main
  className="bg-black text-white min-h-screen relative bg-center bg-fixed bg-no-repeat">
    <div
  className="w-[100vh] h-[100vh] rounded-full absolute left-1/2 -translate-x-1/2  opacity-10"
  style={{
    backgroundImage: "url('/RandR logo.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-black/70 h-[100vh] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Eat • Drive • Sleep • Repeat
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Egypt’s First Exotic Car Enthusiast Club
          </p>
          <Button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition cursor-pointer">
          <Link href='/Contact'>
          Join the Club
          </Link>
          </Button>
        </motion.div>
        
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 text-center bg-neutral-900">
      <section className="py-20 px-6 text-center bg-neutral-900">
        <h2 className="text-4xl font-bold mb-12">Rest In Peace</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg w-64"
          >
            <Image
              src="/HaithamSamir.jpeg"
              alt="Yehia Rashdan"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-red-500">Haitham Samir</h3>
            <p className="text-gray-400 mt-2 text-sm">Please Pray for him</p>
          </motion.div>

        </div>
      </section>
        <h2 className="text-4xl font-bold mb-12">Meet the Founders</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg w-64"
          >
            <Image
              src="/YehiaRashdan.png"
              alt="Yehia Rashdan"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-red-500">Yehia Rashdan</h3>
            <p className="text-gray-400 mt-2 text-sm">Founder</p>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg w-64"
          >
            <Image
              src="/AhmedALwakil.jpg"
              alt="Ahmed Al Wakil"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-red-500">Ahmed Al Wakil</h3>
            <p className="text-gray-400 mt-2 text-sm">Co-Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorships Section */}
      <section id="sponsorships" className="py-20 px-6 text-center bg-neutral-900">
        <h2 className="text-4xl font-bold mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sponsor.delay }}
              className="flex flex-col items-center bg-black p-6 rounded-2xl shadow-lg w-64"
            >
              <Image
                src={sponsor.img}
                alt={sponsor.name}
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-red-500">{sponsor.name}</h3>
              <p className="text-gray-400 mt-2 text-sm">{sponsor.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500">
        <p>© 2025 Roads & Rides Club | All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://instagram.com/roadsnridesegypt"
            target="_blank"
            className="hover:text-red-500"
          >
            Instagram
          </a>
          <a href="#" className="hover:text-red-500">
            Facebook
          </a>
          <a href="#" className="hover:text-red-500">
            YouTube
          </a>
        </div>
      </footer>
    </main>
  );
}
