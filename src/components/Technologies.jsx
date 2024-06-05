import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl font-light">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-4xl md:text-6xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-4xl md:text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-4xl md:text-6xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-4xl md:text-6xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-4xl md:text-6xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-4xl md:text-6xl text-neutral-400" />
        </div>
      </div>
    </div>
  );
}
