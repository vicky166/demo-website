'use client'; 

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const icons = [
    { name: "Instagram", icon: "/img/instagram.png", href: "https://instagram.com" },
    { name: "Facebook", icon: "/img/flickr.png", href: "https://facebook.com" },
    { name: "LinkedIn", icon: "/img/pinterest.png", href: "https://linkedin.com" },
    { name: "YouTube", icon: "/img/twitter.png", href: "https://youtube.com" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-6 border-b border-black flex justify-between items-center">
        <div className="w-20 h-20 relative">
          <Image
            src="/img/Group 1.png"
            alt="uifry logo"
            width={80}
            height={80}
            className="rounded-full mt-[30px]"
          />
        </div>

        <nav className="hidden md:flex space-x-10">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm text-black hover:text-gray-900">
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-4 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-black hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-700">
              All rights reserved ® uifry.com | Terms and conditions apply!
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
            {icons.map((item) => (
              <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={40}
                  height={40}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
