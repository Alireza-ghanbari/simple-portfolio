import React from "react";
import logo from "../assets/kevinRushLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitterSquare
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sm:mb-20 mb-10 flex items-center sm:justify-between flex-col sm:flex-row py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="sm:m-8 m-5 flex items-center justify-center gap-4 text-xl sm:text-2xl">
        <a href="#"><FaLinkedin/></a>
        <a href="https://github.com/Alireza-ghanbari"><FaGithub/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaTwitterSquare/></a>
      </div>
    </nav>
  );
}
