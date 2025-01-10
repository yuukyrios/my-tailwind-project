const services = [
  {
    title: "Development",
    description: "Create a platform with the best and coolest quality from us.",
    icon: "🌐", // Replace with your preferred icon or SVG
    color: "text-blue-500",
  },
  {
    title: "UI/UX Designer",
    description:
      "We provide UI/UX Design services, and of course with the best quality.",
    icon: "🎨",
    color: "text-red-500",
  },
  {
    title: "Graphik Designer",
    description:
      "We provide Graphic Design services, with the best designers.",
    icon: "🖌️",
    color: "text-yellow-500",
  },
  {
    title: "Motion Graphik",
    description: "Create a platform with the best and coolest quality from us.",
    icon: "🎥",
    color: "text-yellow-500",
  },
  {
    title: "Photography",
    description:
      "We provide Photography services, and of course with the best quality.",
    icon: "📷",
    color: "text-blue-500",
  },
  {
    title: "Videography",
    description: "Create a platform with the best and coolest quality from us.",
    icon: "📹",
    color: "text-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 mb-4 ${service.color}`}
              >
                <span className="text-3xl">{service.icon}</span>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
