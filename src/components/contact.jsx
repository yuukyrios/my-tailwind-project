const ContactSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Contact us for the service you want to use
            </h2>
          </div>

          {/* Right Button */}
          <div className="flex justify-center md:justify-end">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
