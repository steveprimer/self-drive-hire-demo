// src/components/Services.jsx
import React, { useState, useEffect } from "react";
import { FaRobot, FaCode, FaBullseye } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={32} className="text-green-400" />,
    title: "Custom Business Websites",
    description:
      "Clean, fast-loading websites that build trust and convert visitors — fully responsive across all devices.",
    image: "/web.jpg",
  },
  {
    icon: <FaRobot size={32} className="text-pink-400" />,
    title: "AI Chatbot Integration",
    description:
      "Automated GPT-powered chatbots that handle 70%+ of customer queries, improving support and reducing manual load.",
    image: "/Chatbotin.jpg",
  },
  {
    icon: <FaBullseye size={32} className="text-purple-400" />,
    title: "eCommerce Store Setup",
    description:
      "Complete online store builds with product pages, cart, payment integration, and mobile-first design — ready to sell.",
    image: "/ecom.jpg",
  },
  {
    icon: <FaBullseye size={32} className="text-yellow-300" />,
    title: "Lead Capture & Automation",
    description:
      "Integrated Calendly, forms, and smart CTAs to turn traffic into booked calls and leads, even while you sleep.",
    image: "/automation.jpg",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Our <span className="text-blue-400">Services</span>
        </h2>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="relative group rounded-xl overflow-hidden shadow-lg border border-blue-800/40 cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className={`w-full h-full object-cover transition duration-500 ${
                  isMobile && activeIndex === index
                    ? "opacity-40"
                    : "opacity-100"
                } group-hover:opacity-40`}
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 backdrop-blur-md bg-white/10 p-4 flex flex-col justify-center items-center text-center transition duration-300 ${
                  isMobile
                    ? activeIndex === index
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
