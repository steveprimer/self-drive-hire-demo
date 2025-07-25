export default function CTASection() {
  return (
    <section
      id="book"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Ready to Book Your Drive?
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          No calls. No hassle. Just one tap on WhatsApp to reserve your ride.
        </p>

        <a
          href="https://wa.me/919876543210?text=Hi! I’m interested in booking a self-drive car. Here’s what I need…"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
        >
          Book via WhatsApp
        </a>
      </div>
    </section>
  );
}
