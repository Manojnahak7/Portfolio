import React, { useState, useEffect } from "react";
import "../ScrollToTop/ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
          title="Back to top"
        >
          &#8679;
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
