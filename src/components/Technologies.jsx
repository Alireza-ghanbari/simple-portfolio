import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { animate, motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -7 },
  animate: {
    y: [7, -7],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
        >
          <RiJavascriptFill className="text-4xl md:text-6xl text-yellow-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsFill className="text-4xl md:text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVar(4.5)}
          initial="initial"
          animate="animate"
        >
          <TbBrandNextjs className="text-4xl md:text-6xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVar(5.5)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-4xl md:text-6xl text-green-600" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-4xl md:text-6xl text-green-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-4xl md:text-6xl text-neutral-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
