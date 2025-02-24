import './indicator.css'
import { useEffect,useState } from "react";
const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Function to update scroll percentage
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="indicator">
      <div
        className="indicator__child"
        style={{ height: `${scrollPercentage}%` }}
      />
    </div>
  );
};
 export default ScrollIndicator;


/* 
 const App = () => {
    return (
      <div>
        <ScrollIndicator />
        <div className="h-[200vh] flex items-center justify-center text-3xl">
          Scroll Down to See the Indicator in Action 🚀
        </div>
      </div>
    );
  };
  
  export default App; */