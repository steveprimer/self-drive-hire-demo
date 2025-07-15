import React, { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";

const CalendlyPopupButton = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/scalebridge-ai/30min",
      });
    } else {
      alert("Calendly is still loading. Please wait.");
    }
  };

  return (
    <button className="laser-button bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg cursor-pointer"
  onClick={handleClick}
  disabled={!isLoaded}
  style={{
    
    cursor: isLoaded ? "pointer" : "not-allowed",
    display: "flex",                 
    alignItems: "center",           
    gap: "8px",                    
  }}
>
  <IoCalendarNumber /> Schedule a Call
</button>

  );
};

export default CalendlyPopupButton;
