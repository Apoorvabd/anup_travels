import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { variants } from "./motionVariants";

import { ThemeToggle } from './Theme.jsx';

const Hero = () => {
  return (
    <motion.section
        className="relative h-screen w-full overflow-hidden"
        initial="hidden"
        animate="show"
      >
      
      {/* ================================

            HERO IMAGE
         Replace this image with your own
      ================================= */}

      <motion.img
        src="hero.png" // TODO: Replace with your hero image
        alt="Anoop Tour & Travels"
        className="absolute inset-0 h-full w-full object-cover"
        variants={variants.kenBurnsOnce}
        initial="initial"
        animate="animate"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-slate-900/55 to-slate-900/30" />

      {/* Decorative Blur */}

      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Main Content */}

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Small Badge */}

          <motion.div
            className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur"
            variants={variants.fadeInOnce}
            transition={{ duration: 0.6 }}
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-amber-400" />
            <p className="text-sm tracking-wide text-white">Trusted Travel Partner</p>
          </motion.div>

          {/* Heading */}

          <motion.h1
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            >
              ANUP
            </motion.span>

            <motion.span
              className="block text-amber-400"
              style={{ display: "block" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            >
              TOUR & TRAVELS
            </motion.span>
          </motion.h1>

          {/* Description */}

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          >
            {/* TODO */}
            Travel with comfort, safety, and reliability.
            Whether it's a family vacation, corporate trip, wedding, or group tour, we make every journey memorable.
          </motion.p>

          {/* Buttons */}

          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
          >
            <motion.a
              href="#contact"
              className="group flex items-center rounded-xl bg-amber-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
              whileHover={{ y: -2, transition: { duration: 0.25, ease: "easeOut" } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              Book Your Journey
              <ArrowRight
                className="ml-3 transition-all duration-300 group-hover:translate-x-2"
                size={20}
              />
            </motion.a>

            <motion.a
              href="tel:+919415797892"
              className="flex items-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-black"
              whileHover={{ y: -2, transition: { duration: 0.25, ease: "easeOut" } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Phone className="mr-3" size={18} />
              Call Now
            </motion.a>
          </motion.div>

          {/* Bottom Stats */}

          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-amber-400">12+</h2>
              <p className="mt-2 text-gray-300">{/* TODO */}Years Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-400">900+</h2>
              <p className="mt-2 text-gray-300">{/* TODO */}Happy Trips</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-400">100%</h2>
              <p className="mt-2 text-gray-300">Safe Journey</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-400">24×7</h2>
              <p className="mt-2 text-gray-300">Customer Support</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-3 text-sm tracking-widest text-white">SCROLL</span>
          <div className="flex h-12 w-7 justify-center rounded-full border border-white">
            <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;


