export const fadeInAnim = {
  initial: { opacity: 0, height: 0, y: 20 },
  animate: { opacity: 1, height: "auto", y: 0 },
  exit: { opacity: 0, height: 0, y: -20, duration: { delary: 0.15 } },
  transition: { duration: 0.25, ease: "easeInOut" },
};
