"use client";

export default function Features() {
  const articles = [
    {
      category: "Growth",
      title: "15 ways to grow your saas in 21 days with no money",
      image: "/img/Rectangle.png",
      href: "#"
    },
    {
      category: "Career",
      title: "Why everyone is moving today to subscriptions",
      image: "/img/Rectangle1.png",
      href: "#"
    },
    {
      category: "Design",
      title: "9 ways to make it quick and never look back again in your life",
      image: "/img/Rectangle2.png",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen mt-[50px] px-4 sm:px-6 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <section className="py-16 md:py-24 lg:py-28">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl lg:text-[56px] text-[#1a1a4e]">
              Our latest updates for you here!
            </h2>
            <p className="text-gray-600 md:text-lg">
              What`&apos;`s happening around the World.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.href}
                className="group block overflow-hidden"
              >
                <div className="relative aspect-[5/3] overflow-hidden rounded-lg mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-sm text-gray-600">
                    {article.category}
                  </span>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-800 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
