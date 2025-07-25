import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "What documents are needed?",
    a: "A valid driving license and an ID proof (like Aadhar or PAN) are required.",
  },
  {
    q: "Can I book for multiple days?",
    a: "Yes, you can book for as many days as you need. Pricing will be adjusted accordingly.",
  },
  {
    q: "Do I need to pay a deposit?",
    a: "Yes, a refundable deposit is required based on the car model.",
  },
  {
    q: "Can I book via WhatsApp?",
    a: "Absolutely! Just click on any 'WhatsApp to Book' button.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-4 bg-[#0c0c0c] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border-b border-gray-700 pb-4 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold hover:text-yellow-400 transition"
            >
              <span>{faq.q}</span>
              <span className="ml-2">
                {openIndex === idx ? (
                  <FaChevronUp className="text-yellow-400" />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </button>

            <div
              className={`mt-2 text-gray-400 transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pt-2">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
