export default function Testimonial() {
  return (
    <div className="min-h-screen mt-[50px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6 text-center lg:text-left px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Let your business thrive <br /> under our supervision
            </h1>
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Launch a business today with our help and get it done with amazing
              launch features, websites, and more with uifry. We help businesses
              like yours thrive every day and beyond.
            </p>
            <div className="flex justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-pink-200">
                  <img
                    src="/img/Tick Square.png"
                    alt="Star rating"
                    className="w-5 h-5 object-cover"
                  />
                </div>
                <span className="text-lg text-black font-bold">
                  <h1>
                    100+
                    <br />
                    Successful Projects
                  </h1>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-pink-200">
                  <img
                    src="/img/Tick Square.png"
                    alt="Star rating"
                    className="w-5 h-5 object-cover"
                  />
                </div>
                <span className="text-lg text-black font-bold">
                  <h1>
                    978+
                    <br />
                    Clients Today
                  </h1>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 bg-pink-200 text-black rounded-md transition-colors hover:bg-pink-300">
                Contact Now
              </button>

              <button className="px-6 py-3 bg-gray-100 text-black rounded-md transition-colors hover:bg-gray-200">
                Book a Demo Today
              </button>
            </div>
          </div>

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
                src="/img/image 17.png"
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
