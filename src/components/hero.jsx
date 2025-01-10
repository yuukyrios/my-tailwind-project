const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white h-screen flex items-center" id="hero">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
        {/* Left Content */}
        <div className="text-center md:text-left md:max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build Your <span className="text-blue-500">Awesome</span> Platform
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers. We will provide the best service for
            those of you who use our services.
          </p>
          <a
            href="#services"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium px-6 py-3 rounded-full transition"
          >
            Our Services &rarr;
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10">
            <img
              src="/src/assets/hero-image.png"
              alt="Hero Image"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <div className="absolute inset-0 -z-10 transform translate-x-8 translate-y-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <path
                fill="url(#gradient)"
                d="M50,-67.2C65.2,-56.5,74.3,-37.7,76.3,-19.6C78.2,-1.5,73.1,15.9,64.8,28.4C56.5,40.9,45,48.4,33.2,58.4C21.5,68.4,10.7,80.9,-3.7,84.7C-18,88.4,-36,83.3,-46.8,72.8C-57.6,62.3,-61.3,46.4,-66.8,31.8C-72.4,17.2,-79.8,3.9,-76.8,-7.7C-73.7,-19.4,-60.2,-29.3,-49.5,-39.6C-38.8,-49.9,-30.9,-60.5,-19.6,-69.6C-8.2,-78.7,6.6,-86.2,20.9,-86.8C35.2,-87.4,50,-80.8,50,-67.2Z"
                transform="translate(100 100)"
              />
              <defs>
                <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E879F9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
