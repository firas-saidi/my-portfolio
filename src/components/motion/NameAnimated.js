import React from 'react'
import { motion } from "framer-motion";


 const NameAnimated = ({text}) => {
    const words = text.split("");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
      };
    
      const child = {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: 20,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };
  return (
         <>
          

<motion.h1

      style={{ overflow: "hidden",  }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
        className='home-text-h3'
          variants={child}
          style={{ marginRight: "15px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
        </>
     )
}
export default NameAnimated