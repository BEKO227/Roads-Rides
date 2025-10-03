"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-4 bg-neutral-900 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-black/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info / Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start"
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-center md:text-left">
            Roads & Rides Club <br />
            Cairo, Egypt
          </p>
          <p className="text-gray-400 text-center md:text-left">Email: info@roadsnridesegypt.com</p>
          <p className="text-gray-400 text-center md:text-left">Phone: +20 11 1234 5678</p>

          <div className="flex gap-6 mt-4 text-2xl">
            <a href="https://instagram.com/roadsnridesegypt" target="_blank" className="hover:text-red-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
