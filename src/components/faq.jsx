"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
    {
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
    {
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
    {
      question: "What is the best way to create a saas business today?",
      answer:
        "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="w-12 h-12 mx-auto mb-4">
          <img
            src="/img/Group1.png"
            alt="FAQ Icon"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-2">
          Frequently asked questions
        </h2>
        
        <p className="text-gray-600">What&apos;s happening around the World.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg bg-white"
          >
            <div
              className={`w-full px-6 py-4 flex justify-between items-center text-left cursor-pointer ${
                openIndex === index ? "bg-violet-900" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <span
                className={`font-medium ${
                  openIndex === index ? "text-white" : "text-black"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`text-xl font-bold ${
                  openIndex === index ? "text-white" : "text-black"
                }`}
              >
                
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <button className="group px-6 py-3 bg-pink-100 hover:bg-pink-200 text-gray-900 rounded-lg font-medium transition-colors flex items-center gap-2">
          Contact Now
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 text-gray-800 mt-[10px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <button className="px-6 py-3 hover:bg-pink-400 text-gray-900 rounded-lg font-medium transition-colors ">
          Book a Demo Today
        </button>
      </div>
    </div>
  );
}
