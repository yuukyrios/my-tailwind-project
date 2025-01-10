const WhySection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white h-screen flex flex-col justify-center items-center" id="why">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Enver Is The Best Choice?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Watch this one-minute video so you understand why you should use
            our services!
          </p>
        </div>

        {/* Video Section */}
        <div className="relative flex justify-center">
          <iframe
            className="w-full max-w-3xl h-72 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Why Enver Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
