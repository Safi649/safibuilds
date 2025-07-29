// 📁 pages/index.js
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-600 text-white px-6 py-12 relative overflow-hidden">
      
      {/* 🔝 Header */}
      <header className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        <Image
          src="/safibuilds-logo.png"
          alt="SafiBuilds"
          width={60}
          height={60}
          priority
        />
        <nav className="hidden md:flex items-center gap-6 font-semibold">
          <a href="#templates" className="hover:text-pink-400">Templates</a>
          <a href="#pricing" className="hover:text-pink-400">Pricing</a>
          <a
            href="/admin/register"
            className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* ✨ Hero Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Your Neon‑Tech Style <br />
            Internal Brand Platform
          </h1>
          <p className="text-xl text-violet-200">
            Build a high‑impact intranet or handbook portal with sleek neon gradients,
            interactive modules, and employee-first design.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#features"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-pink-600 transition"
            >
              Explore Features
            </a>
            <a
              href="#templates"
              className="border border-pink-400 text-pink-400 px-6 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition"
            >
              View Templates
            </a>
          </div>
        </motion.div>

        {/* 📷 Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <img
            src="/illustration.png"
            alt="Tech neon illustration"
            className="max-w-md"
          />
        </motion.div>
      </div>

      {/* 🔻 Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}
