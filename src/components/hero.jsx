"use client";
export default function Hero() {
  return (
    <div className="min-h-screen mt-[50px] px-4 sm:px-6 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-navy-900 leading-tight">
              Launch a software business website today with us!
            </h1>

            <p className="text-gray-600 max-w-lg">
              Launch a business today with our help and get it done with amazing
              launch features, websites, and more with Uify. We help businesses
              like yours thrive every day and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-pink-200 text-black rounded-lg flex items-center gap-2 transition-colors hover:bg-pink-300">
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
              <button className="px-6 py-3 text-black rounded-lg transition-colors hover:bg-gray-200">
                Book a Demo Today
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-pink-200">
                <img
                  src="/img/Star.png"
                  alt="Star rating"
                  className="w-5 h-5 object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">
                Rated 4.9 out of 1200 reviews
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-[50px] left-[-35px] sm:left-[-50px] md:left-[-80px] lg:left-[-95px] rounded-xl w-48 sm:w-64 md:w-80">
              <div className="w-full h-full rounded-sm overflow-hidden">
                <img
                  src="/img/Group 10.png"
                  alt="New visitors graph"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="bg-pink-200 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-8 sm:mt-0 md:mt-0">
              <img
                src="/img/image 18.png"
                alt="Business professional with laptop"
                className="w-full h-auto mx-auto"
              />
            </div>

            {/* <div className="absolute top-12 right-4 transform">
  <img
    src="/img/Group 2.png"
    alt="Decorative image"
    className="object-cover w-16 h-16 md:w-16 md:h-16 lg:w-24 lg:h-24"
  />
</div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
