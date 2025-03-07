import Navbar from "@/components/Navbar/Navbar";
import { motion } from "framer-motion";

import { splitText } from "@/utils/splitText";
import { containerVariant } from "@/utils/variants";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h1-container">
        <motion.h1 variants={containerVariant} initial="hidden" animate="visible" exit="exit">
          {splitText("Home")}
        </motion.h1>
      </div>
    </>
  );
}
