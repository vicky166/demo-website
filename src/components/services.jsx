"use client";

export default function Services() {
  return (
    <div className="min-h-screen mt-[50px] px-4 sm:px-6 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="relative flex justify-center lg:justify-end space-y-8">
            <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 sm:left-[60%] sm:-translate-x-1/2 lg:left-[400px]">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-md overflow-hidden">
                <img
                  src="/img/Group 10.png"
                  alt="New visitors graph"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto sm:ml-0">
              <img
                src="/img/image 11.png"
                alt="Business professional with laptop"
                className="p-2 mx-auto"
              />
            </div>
          </div>
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

            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="p-2 bg-pink-200 rounded-md">
                  <img
                    src="/img/Tick Square.png"
                    alt="Star rating"
                    className="w-5 h-5 object-cover"
                  />
                </div>
                <span className="text-sm text-gray-600">
                  Rated 4.9 out of 1200 reviews
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="p-2 bg-pink-200 rounded-md">
                  <img
                    src="/img/Tick Square.png"
                    alt="Star rating"
                    className="w-5 h-5 object-cover"
                  />
                </div>
                <span className="text-sm text-gray-600">
                  Easiest way to grow your business in days
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-pink-200 text-black rounded-lg flex items-center gap-2 transition-colors hover:bg-pink-300">
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
          </div>
        </div>
      </div>
    </div>
  );
}
