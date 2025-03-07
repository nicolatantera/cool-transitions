import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedPageProps = {
  element: ReactNode;
};

export default function AnimatedPage({ element }: AnimatedPageProps) {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      {element}
    </>
  );
}
