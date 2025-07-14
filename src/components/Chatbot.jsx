import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BsChatText } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

 const storeInfo = `
Store Name: ScaleBridge

Overview:
ScaleBridge is a modern digital agency helping businesses automate, scale, and convert better online. We build clean websites, set up AI chatbots for customer support, and run personalized outreach campaigns.

Services:
- AI Customer Support Chatbots
- Automation Workflows
- Web Development (Modern, responsive, fast)
- Lead Generation & Outreach Campaigns

Support Info:
We typically respond to inquiries within 24 hours.
You can also schedule a call using the Calendly link on our site.

Mission:
To help service-based and eCommerce businesses save time, convert more, and scale efficiently using automation and AI.
`;


  

  

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    if (isOpen && chat.length === 0) {
      setIsTyping(true);
      const welcomeText = "Hi there! 👋 I'm your AI assistant. Feel free to ask me anything about our products, shipping, or return policies!";
      setTimeout(() => {
        const botMessage = { sender: "Bot", text: welcomeText };
        setChat([botMessage]);
        setMessages([{ role: "assistant", content: welcomeText }]);
        setIsTyping(false);
      }, 1200);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "You", text: input };
    const newMessages = [...messages, { role: "user", content: input }];
    setChat([...chat, userMessage]);
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/chat`, {
        messages: newMessages,
        storeInfo,
      });
      const botText = res.data.reply;
      const botMessage = { sender: "Bot", text: botText };
      setChat(prev => [...prev, botMessage]);
      setMessages(prev => [...prev, { role: "assistant", content: botText }]);
    } catch (err) {
      console.error(err);
      const errorMessage = { sender: "Bot", text: "Something went wrong." };
      setChat(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const dotStyle = {
    width: "6px",
    height: "6px",
    backgroundColor: "#555",
    borderRadius: "50%",
    display: "inline-block",
    animation: "blink 1.2s infinite ease-in-out",
  };

  return (
    <>
      

      <style>{`
  @keyframes blink {
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }
`}</style>

      

      {/* Floating Button */}
<div
  onClick={() => setIsOpen(!isOpen)}
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#001022",
    color: "#fff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    fontWeight: "bold",
    cursor: "pointer",
    zIndex: 9999,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "0.3s ease",
  }}
  title={isOpen ? "Close Chat" : "Open Chat"}
>
  <div style={{ position: "relative", width: "28px", height: "28px" }}>
    <span
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0095ff",
        fontSize: "28px",
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        transform: isOpen ? "scale(1)" : "scale(0.8)",
      }}
    >
      <RiCloseLargeLine />
    </span>
    <BsChatText
      size={28}
      color="#0095ff"
      style={{
        position: "absolute",
        inset: 0,
        stroke: "#0095ff",
        strokeWidth: 1,
        opacity: isOpen ? 0 : 1,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        transform: isOpen ? "scale(0.5)" : "scale(1)",
      }}
    />
  </div>
</div>

{/* Chat Window */}
<div
  style={{
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    height: isOpen ? "500px" : "0px",
    backgroundColor: "#0a192f",
    color: "#fff",
    border: "2px solid #0095ff",
    borderRadius: "12px",
    padding: isOpen ? "1rem" : "0 1rem",
    zIndex: 9998,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 6px 20px rgba(0, 149, 255, 0.2)",
    overflow: "hidden",
    maxHeight: isOpen ? "500px" : "0px",
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0px)" : "translateY(20px)",
    pointerEvents: isOpen ? "auto" : "none",
    transition: "max-height 0.4s ease, opacity 0.3s ease, transform 0.3s ease, padding 0.3s ease",
  }}
>
  <div
    style={{
      fontWeight: "700",
      fontSize: "16px",
      marginBottom: "0.8rem",
      color: "#fff",
      backgroundColor: "#0095ff",
      textAlign: "center",
      borderRadius: "8px",
      padding: "0.5rem 0",
    }}
  >
    AI Chat Support
  </div>

  <div
    style={{
      flex: 1,
      overflowY: "auto",
      marginBottom: "0.5rem",
      border: "1px solid #1d4ed8",
      padding: "0.5rem",
      borderRadius: "6px",
      height: "100%",
      backgroundColor: "#0f2138",
    }}
  >
    {chat.map((msg, i) => (
      <p key={i} style={{ margin: "0.4rem 0" }}>
        <strong style={{ color: msg.sender === "You" ? "#0095ff" : "#ffffff" }}>
          {msg.sender}:
        </strong>{" "}
        {msg.text}
      </p>
    ))}
    <div ref={chatEndRef} />
    {isTyping && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "4px",
          paddingLeft: "2px",
        }}
      >
        <strong style={{ color: "#fff" }}>Bot:</strong>
        <div style={{ display: "flex", gap: "3px" }}>
          <span style={{ ...dotStyle, backgroundColor: "#0095ff" }}></span>
          <span style={{ ...dotStyle, backgroundColor: "#0095ff", animationDelay: "0.2s" }}></span>
          <span style={{ ...dotStyle, backgroundColor: "#0095ff", animationDelay: "0.4s" }}></span>
        </div>
      </div>
    )}
  </div>

  <div style={{ display: "flex" }}>
    <input
      type="text"
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyDown={e => e.key === "Enter" && handleSend()}
      style={{
        flex: 1,
        padding: "0.4rem 0.5rem",
        borderRadius: "6px",
        border: "1px solid #0095ff",
        fontSize: "14px",
        outlineColor: "#0095ff",
        backgroundColor: "#e0f2ff",
        color: "#000",
      }}
      placeholder="Type your question..."
    />
    <button
      onClick={handleSend}
      style={{
        marginLeft: "0.5rem",
        padding: "0.4rem 0.7rem",
        backgroundColor: "#0095ff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      ➤
    </button>
  </div>
</div>
    </>
  );
}

export default Chatbot;