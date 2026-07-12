// src/components/About.jsx

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Bus,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const highlights = [
  "Luxury Fleet",
  "Professional Drivers",
  "Customer Satisfaction",
  "Safe Journey",
];

const stats = [
  {
    value: "12+",
    label: "Years Experience",
    icon: Clock3,
  },
  {
    value: "456+",
    label: "Trips Completed",
    icon: Bus,
  },
  {
    value: "1200+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: ShieldCheck,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
    },
  },
};

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-slate-900 py-24 lg:py-32"
    >
      {/* Background Blur */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 800, 0],
            y: [0, -500, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]"
        />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          variants={item}
          className="mb-16 max-w-2xl "
        >
          <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-md font-semibold text-amber-300 sm:ml-96 mb-3 mt-0">
            About Us
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
            Premium Bus Travel
            <br />
            Designed Around Comfort.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            {/* TODO */}
            Experience safe, comfortable, and reliable bus journeys with premium
  services designed to make every trip smooth, relaxing, and memorable.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={imageVariant}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-neutral-800 shadow-[0_20px_80px_rgba(0,0,0,.45)]">

              <motion.img
                src="about.png"
                alt="About"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: .7,
                }}
                className="h-[620px] w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="absolute bottom-8 -right-4 w-64 rounded-3xl border border-neutral-700 bg-neutral-900/90 p-6 backdrop-blur-xl shadow-2xl lg:-right-10"
            >
              <p className="text-5xl font-bold text-amber-400">
                12+
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Years of Trusted Service
              </p>

              <p className="mt-2 text-sm text-neutral-400">
                Replace this text with your company achievement.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={rightVariant}
          >
                        <motion.h3
              variants={item}
              className="text-3xl font-bold text-white"
            >
              Travel Smarter.
              <br />
              Travel Safer.
            </motion.h3>

            <motion.p
              variants={item}
              className="mt-6 leading-8 text-neutral-400"
            >
              {/* TODO */}
              Replace this paragraph with complete company
              information including your mission, services,
              routes, customer commitment and experience.
            </motion.p>

            {/* Checklist */}

            <motion.div
              variants={container}
              className="mt-10 grid gap-5 sm:grid-cols-2"
            >
              {highlights.map((text) => (
                <motion.div
                  key={text}
                  variants={item}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                    rotate: -1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5 backdrop-blur-lg transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 transition group-hover:bg-amber-500">
                    <CheckCircle2
                      size={20}
                      className="text-amber-400 group-hover:text-white"
                    />
                  </div>

                  <span className="font-medium text-neutral-100">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Card */}

            <motion.div
              variants={item}
              whileHover={{
                y: -5,
              }}
              className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 backdrop-blur-xl"
            >
              <h4 className="text-xl font-semibold text-white">
                Why Travelers Trust Us
              </h4>

              <p className="mt-4 leading-7 text-neutral-400">
                {/* TODO */}
                Replace this section with reasons customers
                choose your transportation service over others.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}

        <motion.div
          variants={container}
          className="mt-24 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 backdrop-blur-xl"
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <motion.div
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 transition group-hover:bg-amber-500"
                >
                  <Icon
                    size={26}
                    className="text-amber-400 group-hover:text-white"
                  />
                </motion.div>

                <h3 className="relative mt-6 text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="relative mt-2 text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

