"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "NGp4aCSJSjw", delay: 0 },
  { id: "-1JsatTXLM8", delay: 0.1 },
  { id: "_RC-dRZUi5o", delay: 0.2 },
  { id: "C6SVjh8NpdU", delay: 0.3 },
  { id: "bBMur3ejGi8", delay: 0.4 },  
  { id: "k5OuydFYsNA", delay: 0.5 },  
  { id: "Qlex2hmkxKc", delay: 0.6 },
  { id: "qh6KzRaEVno", delay: 0.7 },
  { id: "jHZFMnne7No", delay: 0.8 },
  { id: "sH5URLOErC8", delay: 0.8 },

];

export default function Videos() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our heros <span className="text-red-500">video </span>covering on <span className="text-red-500">Youtube</span></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: video.delay }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`YouTube video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
