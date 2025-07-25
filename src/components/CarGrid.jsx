import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cars = [
  {
    name: "Mercedes G63 AMG",
    images: [
      "/cars/G63.jpg",
      "/cars/G63_2.jpg",
      "/cars/G63_4.png",
      "/cars/G63_3.jpg",
    ],
    price: "€450/day",
    details: "Automatic, AC, Full tank to full tank, Luxury SUV",
    type: "SUV",
  },
  {
    name: "BMW X4",
    images: ["/cars/BMWX4.png", "/cars/BMWX4_2.jpg", "/cars/BMWX4_3.jpg"],
    price: "€700/day",
    details: "Automatic, Panoramic Sunroof, Sports Mode",
    type: "SUV Coupe",
  },
  {
    name: "BMW 4 Series Coupe",
    images: [
      "/cars/BMW4coupe_2.jpg",
      "/cars/BMW4coupe.jpg",
      "/cars/BMW4coupe_3.jpg",
    ],
    price: "€500/day",
    details: "Automatic, 2-Door Coupe, Leather Interior",
    type: "Coupe",
  },
];

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function CarGrid() {
  return (
    <section id="cars" className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Available Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.map((car, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-5 flex flex-col justify-between"
          >
            {/* Swipeable Image Carousel */}
            <div className="rounded-xl overflow-hidden mb-4">
              <Slider {...sliderSettings}>
                {car.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${car.name} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                ))}
              </Slider>
            </div>

            {/* Car Info */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <span className="text-sm px-2 py-1 bg-green-600 text-white rounded-full">
                {car.type}
              </span>
            </div>

            <p className="text-lg text-green-400 font-semibold mb-1">
              {car.price}
            </p>
            <p className="text-sm text-gray-300">{car.details}</p>

            <a
              href={`https://wa.me/919876543210?text=Hi! I'm interested in booking the ${encodeURIComponent(
                car.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg transition-colors"
            >
              WhatsApp to Book
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
