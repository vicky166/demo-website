export default function Logos2() {
  const items = [
    {
      text: "Super useful and easy to with Over 100+ businesses joined",
      image: "/img/Tick Square.png", 
      bgColor: "bg-pink-200",  
    },
    {
      text: "Super useful and easy to with Over 100+ businesses joined",
      image: "/img/Time.png", 
      bgColor: "bg-yellow-100",  
    },
    {
      text: "Super useful and easy to with Over 100+ businesses joined",
      image: "/img/Up.png", 
      bgColor: "bg-blue-200",  
    },
  ];

  return (
    <div className="w-11/12 sm:w-11/12 lg:w-11/12 mt-12 bg-[#4B3D8F] py-12 sm:py-16 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-12 lg:h-12 mt-4 sm:mt-0 rounded-lg ${item.bgColor} flex items-center justify-center`}
                >
                  <img
                    src={item.image}
                    alt={`Icon for ${item.text}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>
              </div>
              <p className="text-lg sm:text-base lg:text-lg text-white/90 leading-relaxed mt-4 sm:mt-0">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
