"use client";

export default function Form() {
  return (
    <div className=" mt-[50px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6 text-center lg:text-left px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Let your business thrive <br /> under our supervision
            </h1>

            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Launch a business today with our help and get it done with amazing
              launch features, websites, and more with Uify. We help businesses
              like yours thrive every day and beyond.
            </p>

            <h5 className="text-gray-600 font-semibold">
              We are making every business grow!
            </h5>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <img
                  src="/img/Profile.png"
                  alt="User Icon"
                  className="h-5 w-5"
                />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full sm:max-w-md pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-transparent text-sm"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <img src="/img/Send.png" alt="Mail Icon" className="h-5 w-5" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:max-w-md pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-100 focus:border-transparent text-sm"
              />
            </div>

            <button className="w-full sm:max-w-md px-6 py-3 bg-pink-200 text-black rounded-md flex items-center justify-center gap-2 transition-colors hover:bg-pink-300">
              Contact Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end space-y-8">
            <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 sm:left-[60%] sm:-translate-x-1/2 lg:left-[400px]">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-md overflow-hidden">
                <img
                  src="/img/Group110.png"
                  alt="New visitors graph"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto sm:ml-0">
              <img
                src="/img/Girl.png"
                alt="Business professional with laptop"
                className="p-2 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
