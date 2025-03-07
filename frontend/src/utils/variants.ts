export const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
  exit: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3, delay: 1 } },
};

export const letterVariant = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { ease: "backOut", duration: 0.75 },
  },
  exit: {
    y: "100%",
    opacity: 1,
    transition: { ease: "backIn", duration: 0.75 },
  },
};
