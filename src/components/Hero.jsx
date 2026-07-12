import { useEffect, useMemo, useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { variants } from "./motionVariants";

const Hero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Premium subtle parallax (mouse movement -> small translate)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.6 });

  const imgParallaxX = useTransform(springX, [-1, 1], [-18, 18]);
  const imgParallaxY = useTransform(springY, [-1, 1], [-10, 10]);
  const blobParallaxX = useTransform(springX, [-1, 1], [-10, 10]);
  const blobParallaxY = useTransform(springY, [-1, 1], [-8, 8]);

  useEffect(() => {
    if (reduceMotion) return;

    const el = heroRef.current;
    if (!el) return;

    let rafId = 0;
    const onMove = (e) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (e.clientY - cy) / (rect.height / 2);
        mouseX.set(Math.max(-1, Math.min(1, nx)));
        mouseY.set(Math.max(-1, Math.min(1, ny)));
      });
    };

    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion, mouseX, mouseY]);

  const entrance = useMemo(() => {
    return {
      heading: {
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.6 },
        },
      },
      subtitle: {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: "easeOut", delay: 0.22 },
        },
      },
      cta: {
        hidden: { opacity: 0, scale: 0.98, y: 10 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: 0.32 },
        },
      },
      image: {
        hidden: { opacity: 0, x: -70 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 1.05, ease: "easeOut" },
        },
      },
      floatSlow: {
        y: reduceMotion ? 0 : [0, -10, 0],
        transition: reduceMotion
          ? { duration: 0 }
          : { duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
      },
      particleFloat: (delay = 0, duration = 10) => ({
        y: reduceMotion ? 0 : [-6, 6],
        opacity: reduceMotion ? 0.25 : [0.0, 0.25, 0.0],
        transition: reduceMotion
          ? { duration: 0 }
          : { delay, duration, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
      }),
      scrollReveal: {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
      },
    };
  }, [reduceMotion]);

  return (
    <motion.section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      initial="hidden"
      animate="show"
    >
      
      {/* Premium background particles (lightweight) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 top-28 h-2 w-2 rounded-full bg-white/20 blur-[0.5px]"
        initial={{ opacity: 0 }}
        animate={entrance.particleFloat(0.1, 10)}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-16 top-36 h-2.5 w-2.5 rounded-full bg-amber-300/25 blur-[0.5px]"
        initial={{ opacity: 0 }}
        animate={entrance.particleFloat(0.6, 12)}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/3 bottom-28 h-2 w-2 rounded-full bg-white/15 blur-[0.5px]"
        initial={{ opacity: 0 }}
        animate={entrance.particleFloat(0.35, 11)}
      />

      {/* ================================

            HERO IMAGE
         Replace this image with your own
      ================================= */}

      <motion.img
        src="/hero.png"
        alt="Anoop Tour & Travels"
        className="absolute inset-0 h-full w-full object-cover"
        variants={entrance.image}
        initial="hidden"
        animate="show"
        style={{ x: imgParallaxX, y: imgParallaxY }}
        // subtle continuous float (premium)
        transition={{
          duration: reduceMotion ? 0 : 12,
          ease: "easeInOut",
          repeat: reduceMotion ? 0 : Infinity,
          repeatType: "mirror",
        }}
        animate={reduceMotion ? "show" : { ...entrance.image.show, y: [0, -10, 0] }}
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
            variants={entrance.heading}
            initial="hidden"
            animate="show"
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
            variants={entrance.subtitle}
            initial="hidden"
            animate="show"
          >
            {/* TODO */}
            Travel with comfort, safety, and reliability.
            Whether it's a family vacation, corporate trip, wedding, or group tour, we make every journey memorable.
          </motion.p>

          {/* Buttons */}

          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.28 }}
          >
            <motion.a
              href="#contact"
              variants={entrance.cta}
              initial="hidden"
              animate="show"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (!el) return;

                const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset
                // slow scroll (simple ease)
                const start = window.scrollY;
                const diff = y - start;
                const duration = 900; // ms
                let t0 = null;

                const step = (ts) => {
                  if (t0 === null) t0 = ts;
                  const p = Math.min(1, (ts - t0) / duration);
                  const eased = 1 - Math.pow(1 - p, 3);
                  window.scrollTo(0, start + diff * eased);
                  if (p < 1) requestAnimationFrame(step);
                };

                requestAnimationFrame(step);
              }}
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
              variants={entrance.cta}
              initial="hidden"
              animate="show"
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
            variants={entrance.scrollReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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


