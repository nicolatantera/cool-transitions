import Navbar from "@/components/Navbar/Navbar";
import { splitText } from "@/utils/splitText";
import { containerVariant } from "@/utils/variants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="h1-container">
        <motion.h1 variants={containerVariant} initial="hidden" animate="visible" exit="exit">
          {splitText("About")}
        </motion.h1>
      </div>
    </>
  );
}
