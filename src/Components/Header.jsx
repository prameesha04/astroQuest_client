import React from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { MdPermContactCalendar } from "react-icons/md";

const Header = () => {
  return (
    <header className="font-mono flex items-center justify-between px-12 py-4 bg-gray-800 shadow-lg">

      <div className="flex items-center gap-3">
        <img
          className="h-35 w-35 object-contain drop-shadow-lg hover:scale-105 transition-all duration-300"
          src={logo}
          alt="Astro Quest Logo"
        />
        <h1 className="text-6xl font-extrabold text-white tracking-wider hover:scale-105 transition-all duration-300">
          ASTRO QUEST
        </h1>
      </div>

      <ul className="flex gap-x-10">
        <Link to="/">
          <li className="text-white hover:text-yellow-300 hover:scale-110 transition-all duration-300">
            <MdHome className="size-10 drop-shadow-md" />
          </li>
        </Link>

        <Link to="/about">
          <li className="text-white hover:text-yellow-300 hover:scale-110 transition-all duration-300">
            <LiaAudioDescriptionSolid className="size-10 drop-shadow-md" />
          </li>
        </Link>

        <Link to="/contact">
          <li className="text-white hover:text-yellow-300 hover:scale-110 transition-all duration-300">
            <MdPermContactCalendar className="size-10 drop-shadow-md" />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
