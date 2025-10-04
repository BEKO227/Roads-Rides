"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import SponserShip from './Components/Sponsership/SponserShip';
import Footer from './Components/Footer/Footer';

export default function Home() {

  return (
<main
  className="bg-black text-white min-h-screen relative bg-center bg-fixed bg-no-repeat">
<div
  className="
    absolute 
    top-20 left-1/2 -translate-x-1/2  
    opacity-10 
    rounded-full
    w-[60vw] h-[60vw]     /* mobile: smaller circle */
    sm:w-[50vw] sm:h-[50vw]  /* small screens */
    md:w-[40vw] md:h-[40vw]  /* tablets */
    lg:w-[40vw] lg:h-[40vw]  /* desktops */
  "
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
      <SponserShip/>

      {/* Footer */}
      <Footer/>
    </main>
  );
}
