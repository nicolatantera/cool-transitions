import { motion } from "framer-motion";
import { letterVariant } from "./variants";

export const splitText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span key={`${char}-${index}`} variants={letterVariant} style={{ display: "inline-block" }}>
      {char}
    </motion.span>
  ));
};
