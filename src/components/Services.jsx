// src/components/Services.jsx
import React from "react";
import { FaRobot, FaCode, FaBullseye } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={40} className="text-green-500" />,
    title: "Custom Business Websites",
    description:
      "Clean, fast-loading websites that build trust and convert visitors — fully responsive across all devices.",
  },
  {
    icon: <FaRobot size={40} className="text-pink-500" />,
    title: "AI Chatbot Integration",
    description:
      "Automated GPT-powered chatbots that handle 70%+ of customer queries, improving support and reducing manual load.",
  },
  {
    icon: <FaBullseye size={40} className="text-purple-500" />,
    title: "eCommerce Store Setup",
    description:
      "Complete online store builds with product pages, cart, payment integration, and mobile-first design — ready to sell.",
  },
  {
    icon: <FaBullseye size={40} className="text-yellow-400" />,
    title: "Lead Capture & Automation",
    description:
      "Integrated Calendly, forms, and smart CTAs to turn traffic into booked calls and leads, even while you sleep.",
  },
];


const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Our <span className="text-blue-400">Services</span>
        </h2>

        <div className="grid gap-2 sm:gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="bg-[#0f172a] border border-blue-800/40 p-2 md:p-6
 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-700 ease-in-out"
            >
              <div className="mb-4 flex justify-center text-blue-400 text-2xl sm:text-3xl md:text-4xl">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
