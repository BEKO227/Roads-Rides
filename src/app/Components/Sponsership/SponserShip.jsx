import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';


export default function SponserShip() {
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

  )
}
