
const portfolioItems = [
  {
    title: "Movie App",
    image: "/1.png", // Replace with actual image paths
  },
  {
    title: "Interior Design",
    image: "/2.png",
  },
  {
    title: "Corporate Website",
    image: "/3.png",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 " id="porto">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Portfolio</h2>
        </div>

        {/* Portfolio Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
            >
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === 0
                  ? "bg-blue-500"
                  : "bg-gray-500 hover:bg-gray-400 transition"
              }`}
              aria-label={`View portfolio ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
