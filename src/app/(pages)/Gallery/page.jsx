"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { img: "/gallery/1.jpg", delay: 0 },
  { img: "/gallery/2.jpg", delay: 0.1 },
  { img: "/gallery/3.jpg", delay: 0.2 },
  { img: "/gallery/4.jpg", delay: 0.3 },
  { img: "/gallery/5.jpg", delay: 0.4 },
  { img: "/gallery/6.jpg", delay: 0.5 },
  { img: "/gallery/7.jpg", delay: 0.6 },
  { img: "/gallery/8.jpg", delay: 0.7 },
  { img: "/gallery/9.jpg", delay: 0.8 },
  { img: "/gallery/10.jpg", delay: 0.9 },
  { img: "/gallery/11.jpg", delay: 1.0 },
  { img: "/gallery/12.jpg", delay: 1.1 },
  { img: "/gallery/13.jpg", delay: 1.2 },
  { img: "/gallery/14.jpg", delay: 1.3 },
  { img: "/gallery/15.jpg", delay: 1.4 },
  { img: "/gallery/16.jpg", delay: 1.5 },
  { img: "/gallery/17.jpg", delay: 1.6 },
  { img: "/gallery/18.jpg", delay: 1.7 },
  { img: "/gallery/19.jpg", delay: 1.8 },
  { img: "/gallery/20.jpg", delay: 1.9 },
  { img: "/gallery/21.jpg", delay: 2.0 },
  { img: "/gallery/22.jpg", delay: 2.1 },
  { img: "/gallery/23.jpg", delay: 2.2 },
  { img: "/gallery/24.jpg", delay: 2.3 },
  { img: "/gallery/25.jpg", delay: 2.4 },
  { img: "/gallery/26.jpg", delay: 2.5 },
  { img: "/gallery/27.jpg", delay: 2.6 },
  { img: "/gallery/28.jpg", delay: 2.8 },
  { img: "/gallery/29.jpg", delay: 2.9 },
  { img: "/gallery/30.jpg", delay: 3 },
  { img: "/gallery/31.jpg", delay: 3.1 },
  { img: "/gallery/32.jpg", delay: 3.2 },
  { img: "/gallery/33.jpg", delay: 3.3 },
  { img: "/gallery/33.jpg", delay: 3.3 },
  { img: "/gallery/34.jpg", delay: 3.4 },
  { img: "/gallery/35.jpg", delay: 3.5 },
  { img: "/gallery/36.jpg", delay: 3.6 },
  { img: "/gallery/37.jpg", delay: 3.7 },
  { img: "/gallery/38.jpg", delay: 3.8 },
  { img: "/gallery/39.jpg", delay: 3.9 },
  { img: "/gallery/40.jpg", delay: 4.0 },
  { img: "/gallery/41.jpg", delay: 4.1 },
  { img: "/gallery/42.jpg", delay: 4.2 },
  { img: "/gallery/43.jpg", delay: 4.3 },
  { img: "/gallery/44.jpg", delay: 4.4 },
  { img: "/gallery/45.jpg", delay: 4.5 },
  { img: "/gallery/46.jpg", delay: 4.6 },
  { img: "/gallery/47.jpg", delay: 4.7 },
  { img: "/gallery/48.jpg", delay: 4.8 },
  { img: "/gallery/49.jpg", delay: 4.9 },
  { img: "/gallery/50.jpg", delay: 5.0 },
  { img: "/gallery/51.jpg", delay: 5.1 },
  { img: "/gallery/52.jpg", delay: 5.1 },
  { img: "/gallery/53.jpg", delay: 5.1 },


];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="bg-black text-white min-h-screen py-20 px-6 relative">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: item.delay }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedImg(item.img)}
          >
            <Image
              src={item.img}
              alt="Gallery Image"
              width={500}
              height={300}
              className="object-cover w-full h-64 "
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-[90vw] max-h-[90vh] relative"
          >
            <Image
              src={selectedImg}
              alt="Selected Image"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </motion.div>
        </div>
      )}
    </main>
  );
}
