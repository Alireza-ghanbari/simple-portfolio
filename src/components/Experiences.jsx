import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function Experiences() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center font-light my-20"
      >
        Experiences
      </motion.h1>
      <div>
        {EXPERIENCES.map((exprience, index) => (
          <div
            key={index}
            className="sm:mb-10 mb-14 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="text-neutral-400 text-sm mb-2 cursor-default hover:text-neutral-200 transition-all duration-100">
                {exprience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-[19px]">
                {exprience.role} -{" "}
                <span className="text-purple-100 text-[19px]">
                  {exprience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 font-extralight tracking-tight">
                {exprience.description}
              </p>
              {exprience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 tracking-wider hover:text-purple-600 hover:bg-neutral-800 cursor-pointer transition-all duration-150"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
