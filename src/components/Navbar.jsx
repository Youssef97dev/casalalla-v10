"use client";
import { useState } from "react";
//import { Transition } from "@headlessui/react";
//import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed z-50 w-full `}>
      {/* Navbar Content */}
      <div className="max-w-screen-xl mx-auto md:px-4 p-0">
        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center bg-color_white px-5 py-1">
          <div className="text-2xl font-semibold"></div>
          <div className="text-2xl font-semibold">
            <img src="/logo-1.png" className="w-28 h-28" alt="Logo" />
          </div>
          <div></div>
          {/*<button
            className="text-xl text-color_black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>*/}
          {/* Full-screen mobile menu 
          <Transition
            show={isOpen}
            enter="transition ease-out duration-700"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
          >
            <div className="fixed top-[5.5rem] right-0 z-10 w-full h-screen bg-white flex flex-col items-left justify-between px-20">
              <ul
                onClick={() => setIsOpen(false)}
                className="space-y-8 text-bg_intro leading-[25px] text-[20px] mt-10 uppercase font-light"
              >
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#hero">{t("navbar.home")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#about">{t("navbar.about")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#gallery">{t("navbar.gallery")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#activities">{t("navbar.activities")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href={`${t("link_menu")}`} target="_blank">
                    Menu
                  </Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Transition>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
