import React from "react";
import aromatteImg from "../assets/aromatte1.jpg";
import portfolioImg from "../assets/portfolio.jpg";

const OurWork = () => {
  const projects = [
    {
      title: "Aromatte Luxe",
      description:
        "Helped launch a luxury fragrance brand online with a clean, fast, and mobile-first eCommerce store — complete with product showcase and online payment flow.",
      image: aromatteImg, // Replace with your actual image path
      link: "https://aromatteluxe.netlify.app",
    },
    {
      title: "Developer Portfolio",
      description:
        "Clean, mobile-friendly portfolio crafted to clearly communicate services and build trust with potential clients.",
      image: portfolioImg, // Replace with your actual image path
      link: "https://ansonstephan.netlify.app",
    },
  ];

  return (
    <section id="work" className="bg-gradient-to-r from-black via-[#001233] to-black
 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our <span className="text-blue-400">Work</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-800/40 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-700 ease-in-out text-left p-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold ">
                {project.title}
              </h3>
              <p className="text-gray-100 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium mt-3 inline-block hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
