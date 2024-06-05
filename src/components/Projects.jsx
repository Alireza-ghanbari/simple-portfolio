import React from "react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-light">Projects</h1>
      <div>
        {PROJECTS.map((projec, index) => (
          <div
            key={index}
            className="mb-14 lg:mb-8 flex flex-wrap lg:justify-center "
          >
            <div className="w-full lg:w-1/4">
              <img
                src={projec.image}
                alt={projec.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:h-3/4 ">
              <h6 className="mb-2 text-[19px]">{projec.title}</h6>
              <p className="mb-4 text-neutral-400 font-extralight tracking-tight">
                {projec.description}
              </p>
              {projec.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 tracking-wider hover:text-purple-600 hover:bg-neutral-800 cursor-pointer transition-all duration-150"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
