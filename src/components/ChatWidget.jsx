import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isHindi, setIsHindi] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const optionsContainerRef = useRef(null);

  const images = ["/src/assets/images/chat2.png", "/src/assets/images/chat3.png"]; // Vercel-compatible (public folder)

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap');
      @media (max-width: 576px) {
        .chat-widget {
          width: 90% !important;
          right: 5% !important;
          bottom: 100px !important;
          max-height: 75vh !important;
        }
      }
      .chat-toggle-btn:hover {
        background-color: #005fb3;
        transform: scale(1.05);
        box-shadow: 0px 5px 25px rgba(0, 116, 217, 0.4);
      }
      @keyframes slideInUp {
        0% { transform: translateY(100%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeInScale {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [widgetStyle, setWidgetStyle] = useState({
    position: "fixed",
    bottom: "70px",
    right: "20px",
    width: "100px",
    height: "100px",
    zIndex: 10000,
    cursor: "pointer",
    overflow: "hidden",
    backgroundColor: "transparent",
    opacity: 0,
    transform: "none",
    left: "auto",
  });

  useEffect(() => {
    setWidgetStyle(prev => ({
      ...prev,
      bottom: isMobile ? "50px" : "70px",
      right: "20px",
      left: "auto",
      width: isMobile ? "60px" : "100px",
      height: isMobile ? "60px" : "100px",
      transform: "none",
    }));
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, currentImageIndex === 1 ? 4500 : 1500);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidgetStyle(prev => ({
        ...prev,
        animation: "slideIn 1s ease-in-out forwards",
        opacity: 1,
      }));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const floatTimer = setTimeout(() => {
      setWidgetStyle(prev => ({
        ...prev,
        animation: "slideIn 1s ease-in-out forwards, floatIcon 3s ease-in-out infinite",
      }));
    }, 3000);
    return () => clearTimeout(floatTimer);
  }, []);

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(popupTimer);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const toggleOptions = () => {
    setShowAllOptions(prev => {
      setTimeout(() => {
        if (optionsContainerRef.current) {
          optionsContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return !prev;
    });
  };

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleLanguage = () => setIsHindi(!isHindi);
  const selectLanguage = (lang) => {
    setIsHindi(lang === "hi");
    setLanguageSelected(true);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) setUserMessage("");
  };

  const options = isHindi
    ? ["बीमा करवाएं", "पूर्व-अनुमोदित ऑफ़र", "त्वरित भुगतान", "प्रश्न पूछें", "स्वंय सेवा", "ऋण के लिए आवेदन करें", "ईएमआई कैलकुलेटर"]
    : ["Apply for Loan", "Pre Approved Offer", "Get Insured", "Self-Service", "Quick Pay", "Ask a Question", "EMI Calculator"];

  const welcomeText = isHindi
    ? "नमस्ते! मैं श्रेय हूं, एक वर्चुअल असिस्टेंट जो आपकी उपभोक्ता ऋण आवेदन प्रक्रिया में आपकी सहायता कर सकता हूं..."
    : "Hi! I am Shrey, a virtual assistant that can help you with your Consumer Loans application process...";

  return (
    <div style={{ fontFamily: "'Glacial Indifference', sans-serif" }}>
      {!isOpen && showPopup && (
        <div className="shadow-sm" style={{
          position: "fixed",
          bottom: isMobile ? "125px" : "200px",
          right: isMobile ? "25px" : "34px",
          backgroundColor: "#fff",
          borderRadius: "12px 12px 0px 12px",
          padding: isMobile ? "8px 10px" : "12px 16px",
          maxWidth: isMobile ? "170px" : "250px",
          fontSize: isMobile ? "11px" : "14px",
          zIndex: 10001,
          animation: "fadeSlide 0.8s ease-in-out",
        }}>
          <div style={{
            position: "absolute",
            bottom: "-12px",
            right: "0px",
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "12px solid #fff",
          }} />
          <div className="d-flex justify-content-between align-items-center">
            <span>Hello, I’m PuNit. How can I assist you today?</span>
            <button onClick={() => setShowPopup(false)} className="border-0 bg-transparent p-0 ms-2">✕</button>
          </div>
        </div>
      )}

      {!isOpen && (
        <div style={widgetStyle} onClick={toggleChat}>
          <img
            src={images[(currentImageIndex + images.length) % images.length]}
            alt="Shrey Assistant"
            className="img-fluid"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
            }}
          />
          <style>{`
            @keyframes slideIn { 0% { transform: translateX(100px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
            @keyframes floatIcon { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
            @keyframes fadeSlide { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
          `}</style>
        </div>
      )}

      {isOpen && (
        <div className="card shadow-lg chat-widget chat-appear" style={{
          position: "fixed",
          bottom: "90px",
          right: "50px",
          width: "320px",
          maxHeight: "80vh",
          overflowY: "auto",
          zIndex: 9999,
          borderRadius: "20px",
          backgroundColor: "#fff",
          border: "1px solid #dee2e6",
        }}>
          <div className="card-header text-white d-flex justify-content-between align-items-center" style={{
            backgroundColor: "#0074d9",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}>
            <div className="d-flex align-items-center"></div>
            <button className="btn-close btn-close-white" onClick={toggleChat}></button>
          </div>
          <div className="card-body text-center">
            <img src="/src/assets/images/chat3.png" alt="avatar" width="60" height="60" />
            {!languageSelected ? (
              <>
                <div className="bg-light p-3 rounded mb-3 text-start">
                  <p className="mb-0">Hi! I'm Shrey, your assistant. Happy to help! Please choose your language below..</p>
                </div>
                <div className="p-3 border rounded mb-3 bg-white">
                  <button className="btn w-100 mb-2" onClick={() => selectLanguage("en")} style={{ borderColor: "#0074d9", color: "#0074d9", fontWeight: "bold" }}>English</button>
                  <button className="btn w-100" onClick={() => selectLanguage("hi")} style={{ borderColor: "#0074d9", color: "#0074d9", fontWeight: "bold" }}>हिन्दी</button>
                </div>
              </>
            ) : (
              <>
                {!showMenu && (
                  <>
                    <div className="bg-light p-3 rounded mb-3 text-start">
                      <p className="mb-0">{welcomeText}</p>
                    </div>
                    <div className="d-flex justify-content-end mb-2">
                      <button className="btn btn-outline-primary btn-sm" onClick={toggleOptions} style={{ background: "#0074d9", color: "white" }}>
                        {showAllOptions ? (isHindi ? "कम देखें" : "View Less") : (isHindi ? "और देखें" : "View More")}
                      </button>
                    </div>
                    <div ref={optionsContainerRef} className="d-flex flex-wrap justify-content-center gap-2">
                      {(showAllOptions ? options : options.slice(0, 4)).map((option, index) => (
                        <button
                          key={`${option}-${showAllOptions}`}
                          className="btn btn-light option-button"
                          style={{
                            border: "1px solid #0074d9",
                            color: "#0074d9",
                            borderRadius: "25px",
                            padding: "6px 12px",
                            fontSize: "0.85rem",
                            animation: "fadeInScale 0.4s ease-in",
                            animationDelay: `${index * 0.05}s`,
                            animationFillMode: "both",
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                <div className="input-group mt-3">
                  <button className="btn btn-outline-warning" onClick={toggleMenu}>☰</button>
                  <input
                    type="text"
                    className="form-control input-glow"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder={isHindi ? "मैं आपकी क्या सहायता कर सकता हूं?" : "How may I help you?"}
                  />
                  <button className="btn btn-outline-secondary" onClick={toggleLanguage}>{isHindi ? "EN" : "हिंदी"}</button>
                  <button className="btn" onClick={handleSendMessage} style={{ backgroundColor: "#0074d9", color: "#fff" }}>➤</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
