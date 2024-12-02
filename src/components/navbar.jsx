"use client";

import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="w-full items-center px-4 sm:px-6 lg:px-16 mt-5"
        aria-label="Main Navigation"
      >
        <div className="mx-auto w-full flex flex-wrap items-center justify-between lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:gap-4">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <a href="#" aria-label="Home" className="flex items-center">
              <img
                src="/img/Group 1.png"
                alt="Logo"
                className="h-10 sm:h-12 ml-[20px] lg:ml-0"
              />
            </a>

            <div className="lg:hidden flex items-center justify-end">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-start space-x-8">
            {["Home", "About", "Pricing", "Blog"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-base text-gray-800 hover:text-gray-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex justify-end">
            <button
              className="rounded-lg bg-pink-200 text-black px-6 py-2 hover:bg-pink-300 transition-colors"
              title="Contact Now"
            >
              Contact Now
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white absolute inset-x-0 top-20 p-4 shadow-md z-50`}
      >
        <div className="flex flex-col space-y-4">
          {["Home", "About", "Pricing", "Blog"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-lg py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="text-lg py-2 text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Contact Now
          </a>
        </div>
      </div>
    </>
  );
};
