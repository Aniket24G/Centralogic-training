import { useState, useEffect } from "react";
import { Navbar, Home, Work, Project, Contact } from "./Components/index.js";

function App() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <Home />

      <Project />

      <Work />
      <Contact />
      {showButton && (
        <div>
          <button
            className="fixed rounded-full bg-primaryBG border-t-2 border-b-2 border-black bottom-4 right-4 p-4"
            onClick={scrollToTop}
          >
            🢁
          </button>
        </div>
      )}
    </>
  );
}

export default App;
