import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarGrid from "./components/CarGrid";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTA";
import ChatBot from "./components/Chatbot";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <CarGrid />
      <FAQ />
      <CTASection />
      <ChatBot />
    </div>
  );
}
