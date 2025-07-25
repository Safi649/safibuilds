// 📁 pages/index.js
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-6 py-6 relative overflow-hidden">

      {/* 🔝 Header with Logo */}
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SafiBuilds Logo" width={40} height={40} />
          <span className="text-xl font-bold">SafiBuilds</span>
        </div>

        {/* Optional: Nav Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/templates" className="hover:underline">Templates</a>
          <a href="/admin/login" className="hover:underline">Login</a>
          <a
            href="/admin/register"
            className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* ✨ Hero Section (same as before) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Dream Website <br /> Without Any Code
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            SafiBuilds lets you design and launch stunning websites in minutes — for SaaS, Doctors, Restaurants, and more.
          </p>

          <div className="flex gap-4">
            <a
              href="/admin/register"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Start Building
            </a>
            <a
              href="/templates"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              View Templates
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/illustration.svg"
            alt="Website Builder Illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>

      {/* 🔻 Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "reverse" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xl"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}
