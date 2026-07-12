import { useReducedMotion } from "framer-motion";

const DURATION = 0.7;

export const useOnceReducedMotion = () => {
  const reducedMotion = useReducedMotion();
  return reducedMotion;
};

const onceViewport = {
  once: true,
  amount: 0.2,
};

export const viewportOnce = onceViewport;

export const easing = "easeOut";

export const variants = {
  fadeUpOnce: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: easing },
    },
  },
  fadeInOnce: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: DURATION, ease: easing },
    },
  },
  slideUpOnce: {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: easing },
    },
  },
  slideInLeftOnce: {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION, ease: easing },
    },
  },
  slideInRightOnce: {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION, ease: easing },
    },
  },
  staggerContainerOnce: (stagger = 0.12) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  }),
  cardHoverLift: {
    whileHover: {
      y: -6,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  },
  softRotate: {
    whileHover: {
      rotate: 1.5,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  },
  kenBurnsOnce: {
    initial: { scale: 1.02 },
    animate: { scale: 1.08 },
    transition: { duration: 10, ease: "easeOut" },
  },
  imageRevealOnce: {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: easing },
    },
  },
  starsOnceOnHover: {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  },
  avatarHover: {
    whileHover: {
      scale: 1.08,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  },
};

