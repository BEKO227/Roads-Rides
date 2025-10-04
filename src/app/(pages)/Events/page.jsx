'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
    {
        name: "El Gouna Event",
        date: "2022-12-9",
        location: "El Gouna",
        img: "/GounaEvent.jpg",
        desc: "Drive, admire, and share the passion for exotic cars in a community built for true enthusiasts.",
      },
    {
        name: "Exotic Show",
        date: "2023-11-4",
        location: "Cairo Festival City",
        img: "/ExoticShowCFC.jpg",
        desc: "Experience the thrill of speed, connect with like-minded car lovers, and celebrate automotive excellence.",
      },
      {
        name: "Alamien Track Day",
        date: "2024-08-16",
        location: "One Eleven Track - New Alamin",
        img: "/OneEleven.jpg",
        desc: "Showcase your exotic car, meet other enthusiasts, and enjoy a day full of luxury and adrenaline.",
      },
    {
        name: "AUC Exotic x Roads & Rides",
        date: "2024-11-15",
        location: "American Univeristy in Cairo",
        img: "/AucEvent.jpg",
        desc: "Feel the roar of engines, the elegance of design, and the joy of being part of the ultimate car lifestyle.",
      },
    {
      name: "Drag Race Sharm",
      date: "2025-06-15",
      location: "Sharm El-Sheikh Ring Road",
      img: "/ExoticDragRace.png",
      desc:`Gear up for May 3rd in Sharm El Sheikh! Orange Premier and Roads & Rides present Egypt’s first-ever drag race—ignite the engines, chase the thrill!
⚡️🏎️`,
    },
    {
      name: "Roads & Rides Track Day",
      date: "2025-09-19",
      location: "Road Safety Training Center",
      img: "/HaithamSamirEvent.png",
      desc: `In memory of the Big Champ Haithem Samir 🏁🔥
Feel the thrill of speed like never before! The ultimate showdown of exotic machines at Curve Karting RSTC, on 19th of September.
Don’t just watch — live the adrenaline, live the excitement! ⚡️`
,
    },
  ];
  

export default function EventsPage() {
    return (
      <main className="bg-black text-white min-h-screen px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
          Our <span className="text-red-500">latest</span> Events
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-96">
                <Image
                  src={event.img}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-red-500 mb-2">{event.name}</h2>
                <p className="text-gray-400 text-sm mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-300">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    );
  }
  