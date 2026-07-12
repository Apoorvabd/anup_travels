// src/components/Journey.jsx

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  BadgeCheck,
  Bus,
  MapPinned,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Book Your Trip",
    description:
      "TODO: Replace with your booking process description.",
    icon: CalendarCheck2,
  },
  {
    id: "02",
    title: "Booking Confirmation",
    description:
      "TODO: Replace with confirmation process.",
    icon: BadgeCheck,
  },
  {
    id: "03",
    title: "Enjoy Your Journey",
    description:
      "TODO: Replace with travel experience details.",
    icon: Bus,
  },
  {
    id: "04",
    title: "Reach Destination",
    description:
      "TODO: Replace with destination arrival message.",
    icon: MapPinned,
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

export default function Journey() {
  return (
    <motion.section
      id="journey"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-neutral-700 py-24 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-500/15 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]"
        />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          variants={item}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300">
            Journey Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Travel In Just
            <span className="text-amber-400">
              {" "}
              Four Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            From booking your seat to reaching your destination,
            we've made every step simple, comfortable and hassle-free.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          <div className="absolute left-0 right-0 top-12 hidden h-[2px] bg-neutral-800 lg:block" />

          <motion.div
            variants={container}
            className="relative grid gap-10 lg:grid-cols-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  variants={item}
                  whileHover={{
                    y: -12,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="group relative"
                >
                  <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 backdrop-blur-xl shadow-xl shadow-black/20">

                    <span className="text-sm font-semibold tracking-[4px] text-amber-400">
                      {step.id}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{
                        duration: .8,
                      }}
                      className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 group-hover:bg-amber-500"
                    >
                      <Icon
                        size={30}
                        className="text-amber-400 group-hover:text-white"
                      />
                    </motion.div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-neutral-400">
                      {step.description}
                    </p>

                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -top-1 left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-[6px] border-neutral-950 bg-amber-500 shadow-xl lg:flex"
                  />
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          variants={item}
          whileHover={{
            scale: 1.01,
          }}
          className="journey-cta-box relative mt-20 overflow-hidden rounded-[36px] border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-10 lg:p-14"
        >
          <motion.div
            animate={{
              x: [-100, 600],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-32 -skew-x-12 bg-white/5 blur-xl"
          />

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-400">
                Stress Free Travel
              </span>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Every Journey Begins With
                <br />
                A Simple Booking.
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-neutral-400">
                TODO: Replace this content with your travel process,
                booking assistance, customer support information or
                service promise.
              </p>

            </div>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: .95,
              }}
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black shadow-2xl transition hover:bg-amber-400"
            >
              Book Your Seat
            </motion.a>

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}