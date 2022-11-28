import React from 'react'
import { motion } from "framer-motion";

function Hi({text}) {
    const letters = Array.from(text);

    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.5 * i },
      }),
    };
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: -200,
        y: 10000,
        transition: {
          type: "spring",
          damping: 120,
          stiffness: 100,
        },
      },
    };
  
    return (
      <motion.h3
      
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index} className= "home-text-span">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h3>
    );
}

export default Hi