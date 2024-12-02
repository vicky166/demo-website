export default function Logos() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 border border-gray-300 rounded-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center lg:text-left">
              Trusted by over 100+<br /> businesses worldwide!
            </h2>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 w-full">
            <img
              className="w-20 h-20 object-contain"
              src="/img/intercom.png"
              alt="Intercom"
            />
            <img
              className="w-20 h-20 rounded-full bg-green-400 object-contain"
              src="/img/treehouse.png"
              alt="Treehouse"
            />
            <img
              className="w-20 h-20 rounded-full object-contain"
              src="/img/zapier.png"
              alt="Zapier"
            />
            <img
              className="w-20 h-20 rounded-full bg-blue-400 object-contain"
              src="/img/m (1).png"
              alt="M"
            />
            <img
              className="w-20 h-20 object-contain"
              src="/img/vector.png"
              alt="Vector"
            />
            <img
              className="w-20 h-20 rounded-full bg-blue-400 object-contain"
              src="/img/shazam.png"
              alt="Shazam"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
